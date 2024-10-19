import { GAME_LEVELS } from '@/consts'
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useSettingStore = defineStore('settingStore', () => {
  const name = ref(null)
  const mines = ref(10)
  const size = reactive([8, 8])

  function setName(name) {
    name.value = name
  }

  function setMines(mines) {
    mines.value = mines
  }

  function setSize(newSize) {
    size[0] = newSize[0]
    size[1] = newSize[1]
  }

  function setLevel(levelName) {
    const level = GAME_LEVELS[levelName]
    name.value = levelName
    mines.value = level.mines
    size[0] = level.size[0]
    size[1] = level.size[1]
  }

  return {
    name,
    setName,
    mines,
    setMines,
    size,
    setSize,
    setLevel
  }
})
