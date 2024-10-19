<script setup>
import { RouterView } from 'vue-router'
import { getLocalStorage, setLocalStorage } from '@/api/appApi'
import { DEFAULT_LOCAL_STORAGE_VALUES } from './consts'

if (getLocalStorage() === null) {
  setLocalStorage(DEFAULT_LOCAL_STORAGE_VALUES)
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
