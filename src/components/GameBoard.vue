<script setup lang="ts">
import { useGameStore } from '@/stores/GameStore';
import { useRootStore } from '@/stores/RootStore';
import isGameFinished from '@/helpers/isGameFinished';
import toOpenField from '../stores/helpers/toOpenField';
import type { IField } from '@/types/field.interface';
import type { Coordinates } from '@/types/coordinates.type';
import { onMounted } from 'vue';
import { useRouter } from 'nuxt/app';

const router = useRouter()
const gameStore = useGameStore()
const rootStore = useRootStore()

defineProps<{
  onFieldMouseMove: (field: IField) => void
}>()

function onFieldClick(field: IField, fieldCoordinates: Coordinates) {
  if (!rootStore.gameSettings || gameStore.status === 'lose') {
    return
  }
  if (gameStore.status === 'ready') {
    rootStore.setCurrentResult(null)
    gameStore.startGame(rootStore.gameSettings, fieldCoordinates)
  }
  if (field.value === -1) {
    gameStore.setStatus('lose')
    gameStore.timer.stop()
    return
  }
  if (field.isOpen === true) {
    return
  }
  toOpenField(gameStore, rootStore.gameSettings.size, fieldCoordinates)
  if (isGameFinished(gameStore.board) === true) {
    gameStore.setStatus('win')
    gameStore.timer.stop()
  }
}

onMounted(() => {
  if (!rootStore.gameSettings) {
    router.push({ name: 'index' })
  }
})
</script>

<template>
  <div v-if="gameStore.status !== 'ready'" class="board">
    <div v-for="(row, indexRow) in gameStore.board as IField[][]" v-bind:key="indexRow" class="board-row">
      <div
        v-for="(col, indexColumn) in row"
        v-bind:key="indexColumn"
        :class="`field border border-dark field-color-${col.value} ${
          col.isOpen ? 'bg-light' : 'bg-secondary'
        }`"
        @click="() => onFieldClick(col, [indexRow, indexColumn])"
        @mousemove="() => onFieldMouseMove(col)"
      >
        {{ gameStore.status === 'lose' && col.value === -1 ? '*' : '' }}
        {{ col.isOpen && col.value !== 0 ? col.value : '' }}
        <img src="@/assets/fieldsIcons/flagIcon.svg" alt="Flag Icon" v-if="col.status === 'flag' && gameStore.status !== 'lose'" class="field-icon" />
        <img src="@/assets/fieldsIcons/questionIcon.svg" alt="Question Icon" v-if="col.status === 'question' && gameStore.status !== 'lose'" class="field-icon" />
      </div>
    </div>
  </div>
  <div v-else class="board">
    <div v-for="(row, indexRow) in gameStore.board" v-bind:key="indexRow" class="board-row">
      <div
        v-for="(col, indexColumn) in row"
        v-bind:key="indexColumn"
        class="field border border-dark bg-secondary"
        @click="() => onFieldClick(col, [indexRow, indexColumn])"
        @mousemove="() => onFieldMouseMove(col)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.board-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  max-width: 100%;
}
.field {
  width: 16px;
  height: 16px;
  flex-shrink: 1;
  flex-grow: 0;
  position: relative;
  padding: 0;
  cursor: default;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
}

.field-icon {
  width: 13px;
  height: 13px;
  position: absolute;
  top: 2px;
  left: 0;
}

.field-color-1 {
  color: blue;
}

.field-color-2 {
  color: green;
}

.field-color-3 {
  color: red;
}

.field-color-4 {
  color: darkblue;
}

.field-color-5 {
  color: brown;
}

.field-color-6 {
  color: turquoise;
}

.field-color-7 {
  color: black;
}

.field-color-8 {
  color: white;
}

@media (max-width: 768px) {
  .field {
    font-size: 9px;
    height: 9px;
    width: 9px;
    line-height: 9px;
  }

  .field-icon {
    height: 6px;
    width: 6px;
  }
}
</style>