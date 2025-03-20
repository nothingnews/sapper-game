<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useRootStore } from '@/stores/RootStore'
import toFormatTime from '@/helpers/toFormatTime'
import { useRouter } from 'nuxt/app'
import type { IResult } from '@/types/result.interface'
import { setDefaultDataToLocalStorage } from '@/api'
import { gameLevels } from '@/consts/gameLevels'

const rootStore = useRootStore()
const router = useRouter()

const nickNameRef = ref<string>('')

function toSortResultArray(results: IResult[]) {
  return results.concat().sort((a, b) => a.time - b.time).slice(0, 10)
}

function onSaveResultClick() {
  if (!rootStore.currentResult) return
  rootStore.saveResult({ ...rootStore.currentResult, nickname: nickNameRef.value })
  rootStore.setCurrentResult(null)
}

function onToSettingsClick() {
  if (
    rootStore.currentResult &&
    confirm('Несохранённый результат будет утерян. Вы уверены?')
  ) {
    rootStore.setCurrentResult(null)
    rootStore.gameSettings = gameLevels.easy
    router.push({ name: 'index' })
    return
  }
  rootStore.gameSettings = gameLevels.easy
  router.push({ name: 'index' })
}

onBeforeMount(() => {
  setDefaultDataToLocalStorage()
  rootStore.setSortedResults()
})
</script>

<template>
  <div class="results bg-dark container d-flex flex-column">
    <BButton @click="onToSettingsClick" class="m-2">To Settings</BButton>
    <BInputGroup v-if="rootStore.currentResult" class="p-2">
      <BFormInput v-model="nickNameRef" placeholder="Nickname" />
      <BButton v-if="nickNameRef.length > 0" @click="onSaveResultClick">Save</BButton>
    </BInputGroup>
    <BListGroup class="results__list bg-dark p-2">
      <BListGroupItem
        v-for="(result, index) in toSortResultArray(rootStore.results)"
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