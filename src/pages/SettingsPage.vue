<script setup>
import { gameLevels } from '@/consts'
import { useGameSettingsStore } from '@/stores/GameSettingsStore'
import router from '@/router'
import { watchEffect } from 'vue'

const gameSettingsStore = useGameSettingsStore()

const redirectToGamePage = () => {
  router.push('/game')
}

const redirectToRecordsPage = () => {
  router.push('/results')
}
gameSettingsStore.setCurrentLevelInfo(gameLevels[0])
watchEffect(() => {
  const levelInfo = gameSettingsStore.currentLevelInfo
  if (
    levelInfo.name === 'custom' &&
    levelInfo.size[0] * levelInfo.size[1] * 0.5 < levelInfo.mines
  ) {
    levelInfo.mines = Math.floor(levelInfo.size[0] * levelInfo.size[1] * 0.5)
  }
})
</script>

<template>
  <div class="container bg-dark p-3">
    <h1 class="text-light">Settings</h1>
    <BFormSelect class="text-light mb-3 bg-dark" v-model="gameSettingsStore.currentLevelInfo">
      <BFormSelectOption
        class="bg-dark"
        v-for="level in gameLevels"
        v-bind:key="level.name"
        :value="level"
        >{{ level.name }}</BFormSelectOption
      >
    </BFormSelect>
    <BListGroup class="mb-3 bg-dark">
      <BListGroupItem class="bg-dark text-light">
        Playing field size:
        {{
          `${gameSettingsStore.currentLevelInfo.size[0]} / ${gameSettingsStore.currentLevelInfo.size[1]}`
        }}
        <BFormInput
          v-if="gameSettingsStore.currentLevelInfo.name === 'custom'"
          v-model="gameSettingsStore.currentLevelInfo.size[0]"
          type="range"
          min="5"
          max="32" /><BFormInput
          v-if="gameSettingsStore.currentLevelInfo.name === 'custom'"
          v-model="gameSettingsStore.currentLevelInfo.size[1]"
          class="bg-dark"
          type="range"
          min="5"
          max="32"
      /></BListGroupItem>
      <BListGroupItem class="bg-dark text-light"
        >Number of mines: {{ gameSettingsStore.currentLevelInfo.mines }}
        <BFormInput
          v-if="gameSettingsStore.currentLevelInfo.name === 'custom'"
          v-model="gameSettingsStore.currentLevelInfo.mines"
          class="bg-dark"
          type="range"
          min="1"
          :max="
            gameSettingsStore.currentLevelInfo.size[0] *
            gameSettingsStore.currentLevelInfo.size[1] *
            0.5
          "
      /></BListGroupItem>
    </BListGroup>
    <BButton @click="redirectToGamePage" class="button">Start Game</BButton>
    <BButton @click="redirectToRecordsPage" class="button">To Records List</BButton>
  </div>
</template>

<style scoped>
.button {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .button {
    margin-bottom: 10px;
  }
}
</style>