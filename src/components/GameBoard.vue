<script setup>
import FlagIcon from '@/assets/fieldsIcons/FlagIcon.vue'
import QuestionIcon from '@/assets/fieldsIcons/QuestionIcon.vue'
import { useGameStore } from '@/stores/GameStore';
import { FIELD_STATUSES, GAME_STATUSES } from '@/consts';
import { useResultsStore } from '@/stores/ResultsStore';
import isGameFinished from './helpers/isGameFinished';
import toOpenField from '../stores/helpers/toOpenField';
import { useSettingStore } from '@/stores/SettingStore';

const gameStore = useGameStore()
const resultStore = useResultsStore()
const settingsStore = useSettingStore()

defineProps({
  onFieldMouseMove: Function
})

function onFieldClick(field, fieldCoordinates) {
  if (gameStore.status === GAME_STATUSES.LOSE) {
    return
  }
  if (gameStore.status === GAME_STATUSES.READY) {
    resultStore.setCurrentResult(null)
    gameStore.startGame(settingsStore.mines, settingsStore.size, fieldCoordinates)
  }
  if (field.value === -1) {
    gameStore.setStatus(GAME_STATUSES.LOSE)
    gameStore.timer.stop()
    return
  }
  if (field.isOpen === true) {
    return
  }
  toOpenField(gameStore, settingsStore.size, field, fieldCoordinates)
  if (isGameFinished(gameStore.board) === true) {
    gameStore.setStatus(GAME_STATUSES.WIN)
    gameStore.timer.stop()
  }
}
</script>

<template>
  <div v-if="gameStore.status !== GAME_STATUSES.READY" class="board">
    <div v-for="(row, indexRow) in gameStore.board" v-bind:key="indexRow" class="board-row">
      <div
        v-for="(col, indexColumn) in row"
        v-bind:key="indexColumn"
        :class="`field border border-dark field-color-${col.value} ${
          col.isOpen ? 'bg-light' : 'bg-secondary'
        }`"
        @click="() => onFieldClick(col, [indexRow, indexColumn])"
        @mousemove="() => onFieldMouseMove(col)"
      >
        {{ gameStore.status === GAME_STATUSES.LOSE && col.value === -1 ? '*' : '' }}
        {{ col.isOpen && col.value !== 0 ? col.value : '' }}
        <FlagIcon v-if="col.icon === FIELD_STATUSES.FLAG && gameStore.status !== GAME_STATUSES.LOSE" class="field-icon" />
        <QuestionIcon v-if="col.icon === FIELD_STATUSES.QUESTION && gameStore.status !== GAME_STATUSES.LOSE" class="field-icon" />
      </div>
    </div>
  </div>
  <div v-else class="board">
    <div v-for="(row, indexRow) in gameStore.board" v-bind:key="indexRow" class="board-row">
      <div
        v-for="(col, indexColumn) in row"
        v-bind:key="indexColumn"
        class="field border border-dark bg-secondary"
        @click="() => onFieldClick(col, [indexRow, indexColumn])"
        @mousemove="() => onFieldMouseMove(col)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.board-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  max-width: 100%;
}
.field {
  width: 16px;
  height: 16px;
  flex-shrink: 1;
  flex-grow: 0;
  position: relative;
  padding: 0;
  cursor: default;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
}

.field-icon {
  width: 13px;
  height: 13px;
  position: absolute;
  top: 2px;
  left: 0;
}

.field-color-1 {
  color: blue;
}

.field-color-2 {
  color: green;
}

.field-color-3 {
  color: red;
}

.field-color-4 {
  color: darkblue;
}

.field-color-5 {
  color: brown;
}

.field-color-6 {
  color: turquoise;
}

.field-color-7 {
  color: black;
}

.field-color-8 {
  color: white;
}

@media (max-width: 768px) {
  .field {
    font-size: 9px;
    height: 9px;
    width: 9px;
    line-height: 9px;
  }

  .field-icon {
    height: 6px;
    width: 6px;
  }
}
</style>