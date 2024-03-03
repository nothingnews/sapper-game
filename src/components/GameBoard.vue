<script setup>
import FlagIcon from '@/assets/fieldsIcons/FlagIcon.vue'
import QuestionIcon from '@/assets/fieldsIcons/QuestionIcon.vue'
defineProps({
  matrix: Array,
  board: Array,
  gameStatus: String,
  onFieldClick: Function,
  onFieldMouseMove: Function
})
</script>

<template>
  <div v-if="board !== null" class="board">
    <div v-for="(row, indexRow) in board" v-bind:key="indexRow" class="board-row">
      <div
        v-for="(col, indexColumn) in row"
        v-bind:key="indexColumn"
        :class="`field border border-dark field-color-${col.value} ${
          col.isOpen ? 'bg-light' : 'bg-secondary'
        }`"
        @click="() => onFieldClick(col, [indexRow, indexColumn])"
        @mousemove="() => onFieldMouseMove(col)"
      >
        {{ gameStatus === 'lose' && col.value === -1 ? '*' : '' }}
        {{ col.isOpen && col.value !== 0 ? col.value : '' }}
        <FlagIcon v-if="col.icon === 'flag' && gameStatus !== 'lose'" class="field-icon" />
        <QuestionIcon v-if="col.icon === 'question' && gameStatus !== 'lose'" class="field-icon" />
      </div>
    </div>
  </div>
  <div v-else class="board">
    <div v-for="(row, indexRow) in matrix" v-bind:key="indexRow" class="board-row">
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