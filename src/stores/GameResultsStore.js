import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameResultsStore = defineStore('gameResultStore', () => {
  const currentResult = ref(null)

  function setCurrentResult(result) {
    currentResult.value = result
  }

  return {
    currentResult,
    setCurrentResult
  }
})
