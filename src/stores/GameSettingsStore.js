import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameSettingsStore = defineStore('gameSettingsStore', () => {
  const currentLevelInfo = ref(null)

  const setCurrentLevelInfo = (value) => {
    currentLevelInfo.value = value
  }

  return {
    currentLevelInfo,
    setCurrentLevelInfo
  }
})
