import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LOCALSTORAGE_KEY } from '@/consts'

export const useResultsStore = defineStore('recordsStore', () => {
  const results = ref([])

  function setSortedResults() {
    results.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
  }

  function saveResult(result) {
    results.value = [...results.value, result]
    const localResults = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    localResults.push(result)
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localResults))
  }

  return {
    results,
    setSortedResults,
    saveResult
  }
})
