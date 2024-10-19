<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import GameBoard from '@/components/GameBoard.vue'
import GameMenu from '@/components/GameMenu.vue'
import { useGameStore } from '@/stores/GameStore'
import { FIELD_STATUSES, GAME_STATUSES } from '@/consts'

const gameStore = useGameStore()
const gameBoardElementRef = ref(null)
let fieldUnderCursor = null

function onFieldMouseMove(field) {
  fieldUnderCursor = field
}

function onGamingWrapperMouseMove(event) {
  if (event.target === gameBoardElementRef.value) {
    fieldUnderCursor = null
  }
}

function onFieldRightClick(field) {
  if (field.icon === null && gameStore.flags > 0) {
    field.icon = FIELD_STATUSES.FLAG
    gameStore.setFlags(gameStore.flags - 1)
    return
  }
  if (field.icon === null) {
    field.icon = FIELD_STATUSES.QUESTION
    return
  }
  if (field.icon === FIELD_STATUSES.FLAG) {
    field.icon = FIELD_STATUSES.QUESTION
    gameStore.setFlags(gameStore.flags + 1)
    return
  }
  if (field.icon === FIELD_STATUSES.QUESTION) {
    field.icon = null
  }
}
function toDisableContextMenu(event) {
  event.preventDefault()
  if (
    fieldUnderCursor !== null &&
    fieldUnderCursor.isOpen === false &&
    gameStore.status === GAME_STATUSES.GAMING
  ) {
    onFieldRightClick(fieldUnderCursor)
  }
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
    @mousemove="onGamingWrapperMouseMove"
  >
    <GameMenu />
    <GameBoard
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