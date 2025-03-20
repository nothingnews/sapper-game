<script setup lang="ts">
import SettingsForm from '@/components/SettingsForm.vue';
import { useRootStore } from '@/stores/RootStore';
import { useRouter } from 'nuxt/app';
import { onMounted, ref } from 'vue';

const router = useRouter()
const rootStore = useRootStore()
const isMountedRef = ref(false)

function onStartButtonClick() {
  router.push({ name: 'game' })
}

onMounted(() => {
  isMountedRef.value = true
})

</script>

<template>
  <div v-if="isMountedRef" class="container bg-dark p-3">
    <h1 class="text-light">Settings</h1>
    <SettingsForm />
    <BButton @click="onStartButtonClick" class="button">Start Game</BButton>
    <BButton @click="() => router.push({ name: 'results' })" class="button">To Results List</BButton>
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