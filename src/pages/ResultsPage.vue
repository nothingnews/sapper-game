<script setup>
import { onMounted, ref } from 'vue'
import { useGameResultsStore } from '@/stores/GameResultsStore'
import { useResultsStore } from '@/stores/ResultsStore'
import router from '@/router'
import toFormatTime from '@/helpers/toFormatTime'

const gameResultsStore = useGameResultsStore()
const resultsStore = useResultsStore()

const nickNameRef = ref('')

function toSortResultArray(results) {
  return results.sort((a, b) => a.time - b.time).slice(0, 10)
}

function onSaveResultClick() {
  resultsStore.saveResult({ ...gameResultsStore.currentResult, nickname: nickNameRef.value })
  gameResultsStore.setCurrentResult(null)
}

function onToSettingsClick() {
  if (
    gameResultsStore.currentResult &&
    confirm('Несохранённый результат будет утерян. Вы уверены?')
  ) {
    gameResultsStore.setCurrentResult(null)
    router.push('/')
    return
  }
  router.push('/')
}

onMounted(() => {
  resultsStore.setSortedResults()
})
</script>

<template>
  <div class="results bg-dark container d-flex flex-column">
    <BButton @click="onToSettingsClick" class="m-2">To Settings</BButton>
    <BInputGroup v-if="gameResultsStore.currentResult" class="p-2">
      <BFormInput v-model="nickNameRef" placeholder="Nickname" />
      <BInputGroupAppend v-if="nickNameRef.length !== 0">
        <BButton @click="onSaveResultClick">Save</BButton>
      </BInputGroupAppend>
    </BInputGroup>
    <BListGroup class="results__list bg-dark p-2">
      <BListGroupItem
        v-for="(result, index) in toSortResultArray(resultsStore.results)"
        v-bind:key="result.id"
        class="d-flex bg-dark p-1 flex-grow-1 border"
      >
        <h3 class="result-name text-light m-0 flex-grow-1">
          {{ `${index + 1}. ${result.nickname}` }}
        </h3>
        <span class="text-light">{{ toFormatTime(result.time) }}</span>
      </BListGroupItem>
    </BListGroup>
  </div>
</template>

<style scoped>
.results__list {
  min-width: 290px;
}
.result-name {
  font-size: 16px;
}

@media (max-width: 768px) {
  .results__list {
    min-width: 100%;
  }
}
</style>