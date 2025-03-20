<script setup lang="ts">
import { gameLevels } from '@/consts/gameLevels';
import { levelNames } from '@/consts/levelsNames';
import { useRootStore } from '@/stores/RootStore';
import type { LevelNames } from '@/types/level-names.type';
import { onMounted, ref, watchEffect } from 'vue';

const levelNameRef = ref<LevelNames>('easy')
const rootStore = useRootStore()

function onLevelSelect(name: LevelNames) {
  levelNameRef.value = name
  rootStore.setGameSettings(gameLevels[name])
}

function onSizeInput() {
  if (rootStore.gameSettings) {
    rootStore.gameSettings.size = [Number(rootStore.gameSettings.size[0]), Number(rootStore.gameSettings.size[0])]
  }
}

function onMinesInput() {
  if (rootStore.gameSettings) {
    rootStore.gameSettings.mines = Number(rootStore.gameSettings.mines)
  }
}

watchEffect(() => {
  if (
    rootStore.gameSettings &&
    levelNameRef.value === 'custom' &&
    rootStore.gameSettings.size[0] * rootStore.gameSettings.size[1] * 0.5 < rootStore.gameSettings.mines
  ) {
    rootStore.gameSettings.mines = Math.floor(rootStore.gameSettings.size[0] * rootStore.gameSettings.size[1] * 0.5)
  }
})

onMounted(() => {
  rootStore.setGameSettings(gameLevels.easy)
})

</script>

<template>
  <BFormSelect
    class="text-light mb-3 bg-dark"
    v-model="levelNameRef"
    @update:model-value="onLevelSelect"
  >
    <BFormSelectOption
      class="bg-dark"
      v-for="name in levelNames"
      v-bind:key="name"
      :value="name"
      >{{ name }}</BFormSelectOption
    >
  </BFormSelect>
  <BListGroup v-if="rootStore.gameSettings" class="mb-3 bg-dark">
    <BListGroupItem class="bg-dark text-light">
      Playing field size:
      {{
        `${rootStore.gameSettings.size[0]} / ${rootStore.gameSettings.size[1]}`
      }}
      <BFormInput
        v-if="levelNameRef === 'custom'"
        v-model="rootStore.gameSettings.size[0]"
        :oninput="onSizeInput"
        type="range"
        min="5"
        max="32" /><BFormInput
        v-if="levelNameRef === 'custom'"
        v-model="rootStore.gameSettings.size[1]"
        :oninput="onSizeInput"
        class="bg-dark"
        type="range"
        min="5"
        max="32"
    /></BListGroupItem>
    <BListGroupItem class="bg-dark text-light"
      >Number of mines: {{ rootStore.gameSettings.mines }}
      <BFormInput
        v-if="levelNameRef === 'custom'"
        v-model="rootStore.gameSettings.mines"
        :oninput="onMinesInput"
        class="bg-dark"
        type="range"
        min="1"
        :max="
          rootStore.gameSettings.size[0] *
          rootStore.gameSettings.size[1] *
          0.5
        "
    /></BListGroupItem>
  </BListGroup></template>

<style scoped></style>