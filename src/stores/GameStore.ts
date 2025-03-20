import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import createMatrix from '@/helpers/createMatrix'
import createGamingBoard from './helpers/createGamingBoard'
import type { GameStatuses } from '@/types/game-statuses.type'
import type { IGameSettings } from '@/types/game-settings.interface'
import type { IField } from '@/types/field.interface'
import type { Board } from '@/types/board.type'
import type { Coordinates } from '@/types/coordinates.type'
import type { ITimer } from '@/types/timer.interface'

export const useGameStore = defineStore('gameStore', () => {
  const flags = ref<number>(0)
  const board = ref<Board>([])
  const status = ref<GameStatuses>('ready')
  const timer = ref<ITimer>({
    value: 0,
    interval: null,
    stop: function () {
      if (this.interval) {
        clearInterval(this.interval)
      }
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

  function setStatus(newStatus: GameStatuses) {
    status.value = newStatus
  }

  function setFlags(newFlags: number) {
    flags.value = newFlags
  }

  function setBoard(newBoard: Board | IField[][]) {
    board.value = newBoard
  }

  function resetGame(gameSettings: IGameSettings) {
    const [x, y] = gameSettings.size
    board.value = createMatrix(x, y)
    status.value = 'ready'
    flags.value = gameSettings.mines
    timer.value.reset()
  }

  function startGame(gameSettings: IGameSettings, firstFieldCoordinates: Coordinates) {
    board.value = createGamingBoard(gameSettings, firstFieldCoordinates)
    status.value = 'gaming'
    timer.value.init()
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
