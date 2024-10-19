<script setup>
import { LEVEL_NAMES, ROUTES } from '@/consts'
import router from '@/router'
import { useSettingStore } from '@/stores/SettingStore';
import { onMounted, watchEffect } from 'vue'

const settingsStore = useSettingStore()

function onLevelSelect(levelName) {
  settingsStore.setLevel(levelName)
}

watchEffect(() => {
  if (
    settingsStore.name === LEVEL_NAMES.CUSTOM &&
    settingsStore.size[0] * settingsStore.size[1] * 0.5 < settingsStore.mines
  ) {
    settingsStore.setMines(Math.floor(settingsStore.size[0] * settingsStore.size[1] * 0.5))
  }
})
onMounted(() => {
  settingsStore.setLevel(LEVEL_NAMES.EASY)
})
</script>

<template>
  <div class="container bg-dark p-3">
    <h1 class="text-light">Settings</h1>
    <BFormSelect
      class="text-light mb-3 bg-dark"
      v-model="settingsStore.name"
      @update:model-value="onLevelSelect"
    >
      <BFormSelectOption
        class="bg-dark"
        v-for="name in Object.values(LEVEL_NAMES)"
        v-bind:key="name"
        :value="name"
        >{{ name }}</BFormSelectOption
      >
    </BFormSelect>
    <BListGroup class="mb-3 bg-dark">
      <BListGroupItem class="bg-dark text-light">
        Playing field size:
        {{
          `${settingsStore.size[0]} / ${settingsStore.size[1]}`
        }}
        <BFormInput
          v-if="settingsStore.name === LEVEL_NAMES.CUSTOM"
          v-model="settingsStore.size[0]"
          type="range"
          min="5"
          max="32" /><BFormInput
          v-if="settingsStore.name === LEVEL_NAMES.CUSTOM"
          v-model="settingsStore.size[1]"
          class="bg-dark"
          type="range"
          min="5"
          max="32"
      /></BListGroupItem>
      <BListGroupItem class="bg-dark text-light"
        >Number of mines: {{ settingsStore.mines }}
        <BFormInput
          v-if="settingsStore.name === LEVEL_NAMES.CUSTOM"
          v-model="settingsStore.mines"
          class="bg-dark"
          type="range"
          min="1"
          :max="
            settingsStore.size[0] *
            settingsStore.size[1] *
            0.5
          "
      /></BListGroupItem>
    </BListGroup>
    <BButton @click="() => router.push(ROUTES.GAME)" class="button">Start Game</BButton>
    <BButton @click="() => router.push(ROUTES.RESULTS)" class="button">To Results List</BButton>
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