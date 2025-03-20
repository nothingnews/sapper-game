import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getSortedResults, saveNewResult } from '@/api/resultApi'
import type { IResult } from '@/types/result.interface'
import type { IGameSettings } from '@/types/game-settings.interface'

export const useRootStore = defineStore('rootStore', () => {
  const gameSettings = ref<IGameSettings | null>(null)
  const results = ref<IResult[]>([])
  const currentResult = ref<IResult | null>(null)

  function setGameSettings(settings: IGameSettings) {
    gameSettings.value = settings
  }

  function setCurrentResult(result: IResult | null) {
    currentResult.value = result
  }

  function setSortedResults() {
    const newResults = getSortedResults()
    if (newResults === null) return
    results.value = newResults
  }

  function saveResult(result: IResult) {
    saveNewResult(result)
    results.value = [...results.value, result]
  }

  return {
    gameSettings,
    setGameSettings,
    setSortedResults,
    saveResult,
    results,
    setCurrentResult,
    currentResult
  }
})
