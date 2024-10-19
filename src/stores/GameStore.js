import { GAME_STATUSES } from '@/consts'
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import createMatrix from '@/helpers/createMatrix'
import createGamingBoard from './helpers/createGamingBoard'

export const useGameStore = defineStore('gameStore', () => {
  const flags = ref(0)
  const board = ref([])
  const status = ref(GAME_STATUSES.READY)
  const timer = reactive({
    value: 0,
    interval: null,
    stop: function () {
      clearInterval(this.interval)
    },
    init: function () {
      this.reset()
      this.interval = setInterval(() => {
        this.value += 1
      }, 1000)
    },
    reset: function () {
      this.stop()
      this.value = 0
    }
  })

  function setStatus(newStatus) {
    status.value = newStatus
  }

  function setFlags(newFlags) {
    flags.value = newFlags
  }

  function setBoard(newBoard) {
    board.value = newBoard
  }

  function resetGame(size, mines) {
    const [x, y] = size
    board.value = createMatrix(x, y)
    status.value = GAME_STATUSES.READY
    flags.value = mines
    timer.reset()
  }

  function startGame(mines, size, firstFieldCoordinates) {
    board.value = createGamingBoard(board.value, mines, size, firstFieldCoordinates)
    status.value = GAME_STATUSES.GAMING
    timer.init()
  }

  return {
    board,
    setBoard,
    status,
    setStatus,
    timer,
    flags,
    setFlags,
    resetGame,
    startGame
  }
})
