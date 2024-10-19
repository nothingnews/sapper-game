<script setup>
import { GAME_STATUSES, ROUTES } from '@/consts';
import router from '@/router';
import { useGameStore } from '@/stores/GameStore';
import { useResultsStore } from '@/stores/ResultsStore';
import { onMounted } from 'vue';
import toFormatTime from '@/helpers/toFormatTime';
import FlagIcon from '@/assets/fieldsIcons/FlagIcon.vue';
import { useSettingStore } from '@/stores/SettingStore';

const gameStore = useGameStore()
const settingsStore = useSettingStore()
const resultStore = useResultsStore()

function onBackToSettingsClick() {
  gameStore.resetGame(settingsStore.size, settingsStore.mines)
  router.push(ROUTES.SETTINGS)
}

function onSaveResultClick() {
  resultStore.setCurrentResult({ id: Date.now(), time: gameStore.timer.value })
  gameStore.resetGame(settingsStore.size, settingsStore.mines)
  router.push(ROUTES.RESULTS)
}

onMounted(() => {
  if (settingsStore.name === null) {
    router.push(ROUTES.SETTINGS)
  }
  gameStore.resetGame(settingsStore.size, settingsStore.mines)
})
</script>

<template>
  <div
    class="d-flex flex-column align-items-center"
    ref="gameBoardElementRef"
    @mousemove="onGamingBoardMouseMove"
  >
    <h2 class="text-light">
      {{ gameStore.status === GAME_STATUSES.WIN ? 'You win! Your result: ' : ''}}
      {{ gameStore.status === GAME_STATUSES.LOSE ? 'You lost' : toFormatTime(gameStore.timer.value) }}
    </h2>
    <BButton v-if="gameStore.status === GAME_STATUSES.WIN" @click="onSaveResultClick">Save Result</BButton>
    <div>
      <BButton @click="() => gameStore.resetGame(settingsStore.size, settingsStore.mines)" class="button m-2"> Play Again </BButton>
      <BButton @click="onBackToSettingsClick" class="button m-2">Back to Settings</BButton>
    </div>
    <BBadge class="d-flex align-items-center m-2"> <FlagIcon />: {{ gameStore.flags }}</BBadge>
  </div>
</template>