<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import GameBoard from '@/components/GameBoard.vue'
import GameMenu from '@/components/GameMenu.vue'
import type { IField } from '@/types/field.interface'
import { useGameStore } from '@/stores/GameStore'
import { useRouter } from 'nuxt/app'
import { useRootStore } from '@/stores/RootStore'

const router = useRouter()
const gameStore = useGameStore()
const rootStore = useRootStore()
let fieldUnderCursor: IField | null = null

function onFieldMouseMove(field: IField) {
  fieldUnderCursor = field
}

function onFieldRightClick(field: IField) {
  if (field.status === null && gameStore.flags > 0) {
    field.status = 'flag'
    gameStore.setFlags(gameStore.flags - 1)
    return
  }
  if (field.status === null) {
    field.status = 'question'
    return
  }
  if (field.status === 'flag') {
    field.status = 'question'
    gameStore.setFlags(gameStore.flags + 1)
    return
  }
  if (field.status === 'question') {
    field.status = null
  }
}
function toDisableContextMenu(event: MouseEvent) {
  event.preventDefault()
  if (
    fieldUnderCursor !== null &&
    fieldUnderCursor.isOpen === false &&
    gameStore.status === 'gaming'
  ) {
    onFieldRightClick(fieldUnderCursor)
  }
}

if (rootStore.gameSettings) {
  gameStore.resetGame(rootStore.gameSettings)
} else {
  router.push({ name: 'index' })
}

onMounted(() => {
  document.body.addEventListener('contextmenu', toDisableContextMenu)
})

onUnmounted(() => {
  document.body.removeEventListener('contextmenu', toDisableContextMenu)
})
</script>

<template>
  <div class="container d-flex flex-column align-items-center bg-dark p-4">
    <GameMenu />
    <GameBoard @field-mouse-move="onFieldMouseMove" />
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