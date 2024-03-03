<script setup>
import { RouterView } from 'vue-router'
import { getLocalStorage, setLocalStorage } from '@/api/appApi'
import { defaultLocalStorage } from './consts'

if (getLocalStorage() === null) {
  setLocalStorage(defaultLocalStorage)
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
