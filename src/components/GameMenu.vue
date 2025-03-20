<script setup lang="ts">
import { useGameStore } from '@/stores/GameStore';
import { onBeforeMount } from 'vue';
import toFormatTime from '@/helpers/toFormatTime';
import { useRouter } from 'nuxt/app';
import { useRootStore } from '@/stores/RootStore';

const gameStore = useGameStore()
const rootStore = useRootStore()
const router = useRouter()

function onBackToSettingsClick() {
  if (rootStore.gameSettings) {
    gameStore.resetGame(rootStore.gameSettings)
    router.push({ name: 'index' })
  }
}

function onSaveResultClick() {
  if (rootStore.gameSettings) {
    rootStore.setCurrentResult({ id: Date.now(), time: gameStore.timer.value, nickname: null })
    gameStore.resetGame(rootStore.gameSettings)
    router.push({ name: 'results' })
  }
}

function onPlayAgainClick() {
  if (rootStore.gameSettings) {
    gameStore.resetGame(rootStore.gameSettings)
  }
}
</script>

<template>
  <div
    class="d-flex flex-column align-items-center"
    ref="gameBoardElementRef"
  >
    <h2 class="text-light">
      {{ gameStore.status === 'win' ? 'You win! Your result: ' : ''}}
      {{ gameStore.status === 'lose' ? 'You lost' : toFormatTime(gameStore.timer.value) }}
    </h2>
    <BButton v-if="gameStore.status === 'win'" @click="onSaveResultClick">Save Result</BButton>
    <div>
      <BButton @click="onPlayAgainClick" class="button m-2"> Play Again </BButton>
      <BButton @click="onBackToSettingsClick" class="button m-2">Back to Settings</BButton>
    </div>
    <BBadge class="d-flex align-items-center m-2"> <img src="@/assets/fieldsIcons/flagIcon.svg" alt="Flag Icon" />: {{ gameStore.flags }}</BBadge>
  </div>
</template>