<script setup>
import router from '@/router'
import { useGameSettingsStore } from '@/stores/GameSettingsStore'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import FlagIcon from '@/assets/fieldsIcons/FlagIcon.vue'
import { useGameResultsStore } from '@/stores/GameResultsStore'
import GameBoard from '@/components/GameBoard.vue'
import toFormatTime from '@/helpers/toFormatTime'

const gameSettingsStore = useGameSettingsStore()
const gameResultsStore = useGameResultsStore()

const gameMatrix = ref(createMatrix())
const gameBoard = ref(null)
const gameStatusRef = ref('gaming')
const timerRef = reactive({
  value: 0,
  interval: null,
  stop: function () {
    clearInterval(this.interval)
  },
  init: function () {
    this.reset()
    this.interval = setInterval(() => {
      this.value += 1
    }, 1000)
  },
  reset: function () {
    this.stop()
    this.value = 0
  }
})
const gameBoardElementRef = ref(null)
const flagsRef = ref(0)
let fieldUnderCursor = null

function redirectToSettingsPage() {
  router.push('/')
}

function redirectToRecordsPage() {
  router.push('/results')
}

function setNumbersAroundMineToMatrix(coordinates) {
  const [row, column] = coordinates
  if (
    row >= 0 &&
    row < gameSettingsStore.currentLevelInfo.size[0] &&
    column >= 0 &&
    column < gameSettingsStore.currentLevelInfo.size[1] &&
    gameBoard.value[row][column].value > -1
  ) {
    gameBoard.value[row][column].value++
  }
}

function createMatrix() {
  if (gameSettingsStore.currentLevelInfo === null) {
    redirectToSettingsPage()
    return
  }
  return Array.from({ length: gameSettingsStore.currentLevelInfo.size[0] }, () =>
    Array.from({ length: gameSettingsStore.currentLevelInfo.size[1] }, () => {
      return {}
    })
  )
}

function createGamingBoard(firstFieldCoordinates = null) {
  // Матрица заполняется значениями без мин
  gameBoard.value = [...gameMatrix.value]
  gameBoard.value.forEach((row, indexRow) => {
    row.forEach((column, indexColumn) => {
      gameBoard.value[indexRow][indexColumn].value = 0
      gameBoard.value[indexRow][indexColumn].isOpen = false
      gameBoard.value[indexRow][indexColumn].icon = null
    })
  })
  const minesCoordinates = new Set()
  while (minesCoordinates.size < gameSettingsStore.currentLevelInfo.mines) {
    const randomRow = Math.floor(Math.random() * gameSettingsStore.currentLevelInfo.size[0])
    const randomColumn = Math.floor(Math.random() * gameSettingsStore.currentLevelInfo.size[1])
    if (firstFieldCoordinates !== null) {
      const [rowClickedField, columnClickedField] = firstFieldCoordinates
      const aroundBombFieldsCoordinates = getArrayAroundFieldsCoordinatesByFieldCoordinates([
        randomRow,
        randomColumn
      ])
      let isClickedAroundOrOnBomd = false
      aroundBombFieldsCoordinates.forEach((coordinatesAroundBomb) => {
        const [rowBombedField, columnBombedField] = coordinatesAroundBomb
        if (
          (rowBombedField === rowClickedField && columnBombedField === columnClickedField) ||
          (randomRow === rowClickedField && randomColumn === columnClickedField)
        ) {
          isClickedAroundOrOnBomd = true
        }
      })
      if (isClickedAroundOrOnBomd === true) {
        continue
      }
    }
    minesCoordinates.add(JSON.stringify([randomRow, randomColumn]))
  }
  const uniqueMinesCoordinates = Array.from(minesCoordinates, (elem) => JSON.parse(elem))
  for (const coord of uniqueMinesCoordinates) {
    const [row, column] = coord
    gameBoard.value[row][column].value = -1
    const aroundFieldCoordinates = getArrayAroundFieldsCoordinatesByFieldCoordinates(coord)
    aroundFieldCoordinates.forEach((coords) => setNumbersAroundMineToMatrix(coords))
  }
}

function resetGame() {
  gameStatusRef.value = null
  timerRef.reset()
  flagsRef.value = gameSettingsStore.currentLevelInfo.mines
  gameBoard.value = null
}

function startGame(firstFieldCoordinates) {
  gameStatusRef.value = 'gaming'
  gameResultsStore.setCurrentResult(null)
  timerRef.init()
  flagsRef.value = gameSettingsStore.currentLevelInfo.mines
  createGamingBoard(firstFieldCoordinates)
}

function getArrayAroundFieldsCoordinatesByFieldCoordinates(fieldCoordinates) {
  const [row, column] = fieldCoordinates
  return [
    [row - 1, column],
    [row + 1, column],
    [row, column - 1],
    [row, column + 1],
    [row + 1, column + 1],
    [row - 1, column - 1],
    [row + 1, column - 1],
    [row - 1, column + 1]
  ]
}

function toOpenAroundFields(field, fieldCoordinates) {
  const aroundFieldsCoordinates =
    getArrayAroundFieldsCoordinatesByFieldCoordinates(fieldCoordinates)

  aroundFieldsCoordinates.forEach((coord) => {
    const [row, column] = coord
    if (
      row >= 0 &&
      row < gameSettingsStore.currentLevelInfo.size[0] &&
      column >= 0 &&
      column < gameSettingsStore.currentLevelInfo.size[1]
    ) {
      const currentField = gameBoard.value[row][column]
      toOpenField(currentField, coord)
    }
  })
}

function isGameFinished() {
  let areAllNotMinedOpened = true
  gameBoard.value.forEach((row) => {
    const rowFields = row.filter((field) => field.value > -1)
    rowFields.forEach((field) => {
      if (field.isOpen === false) {
        areAllNotMinedOpened = false
      }
    })
  })
  return areAllNotMinedOpened
}

function toOpenField(field, fieldCoordinates) {
  field.icon = null
  if (field.value === 0 && field.isOpen === false) {
    field.isOpen = true
    toOpenAroundFields(field, fieldCoordinates)
  }
  field.isOpen = true
}

function onFieldClick(field, fieldCoordinates) {
  if (gameStatusRef.value === 'lose') {
    return
  }
  if (gameBoard.value === null) {
    startGame(fieldCoordinates)
  }
  if (field.value === -1) {
    gameStatusRef.value = 'lose'
    timerRef.stop()
    return
  }
  if (field.isOpen === true) {
    return
  }
  toOpenField(field, fieldCoordinates)
  if (isGameFinished() === true) {
    gameStatusRef.value = 'win'
    timerRef.stop()
  }
}

function onFieldMouseMove(field) {
  fieldUnderCursor = field
}

function onGamingBoardMouseMove(event) {
  if (event.target === gameBoardElementRef.value) {
    fieldUnderCursor = null
  }
}

function onFieldRightClick(field) {
  if (field.icon === null && flagsRef.value > 0) {
    field.icon = 'flag'
    flagsRef.value -= 1
    return
  }
  if (field.icon === null) {
    field.icon = 'question'
    return
  }
  if (field.icon === 'flag') {
    field.icon = 'question'
    flagsRef.value += 1
    return
  }
  if (field.icon === 'question') {
    field.icon = null
  }
}
function toDisableContextMenu(event) {
  event.preventDefault()
  if (
    fieldUnderCursor !== null &&
    fieldUnderCursor.isOpen === false &&
    gameStatusRef.value === 'gaming'
  ) {
    onFieldRightClick(fieldUnderCursor)
  }
}

function onReplayClick() {
  resetGame()
}

function onBackToSettingsClick() {
  redirectToSettingsPage()
}

function onSaveResultClick() {
  gameResultsStore.setCurrentResult({ id: Date.now(), time: timerRef.value })
  redirectToRecordsPage()
}

onMounted(() => {
  document.body.addEventListener('contextmenu', toDisableContextMenu)
})

onUnmounted(() => {
  document.body.removeEventListener('contextmenu', toDisableContextMenu)
})
</script>

<template>
  <div
    class="container d-flex flex-column align-items-center bg-dark p-4"
    ref="gameBoardElementRef"
    @mousemove="onGamingBoardMouseMove"
  >
    <h2 class="text-light">
      {{ gameStatusRef === 'lose' ? 'You lost' : toFormatTime(timerRef.value) }}
    </h2>
    <BButton v-if="gameStatusRef === 'win'" @click="onSaveResultClick">Save Result</BButton>
    <div>
      <BButton @click="onReplayClick" class="button"> Play Again </BButton>
      <BButton @click="onBackToSettingsClick" class="button">Back to Settings</BButton>
    </div>
    <BBadge class="d-flex align-items-center m-2"> <FlagIcon />: {{ flagsRef }}</BBadge>
    <GameBoard
      :board="gameBoard"
      :matrix="gameMatrix"
      :gameStatus="gameStatusRef"
      @field-click="onFieldClick"
      @field-mouse-move="onFieldMouseMove"
    />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}
.button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>