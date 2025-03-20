import type { IGameSettings } from '@/types/game-settings.interface'
import type { LevelNames } from '@/types/level-names.type'

export const gameLevels: { [k in LevelNames]: IGameSettings } = {
  easy: {
    size: [8, 8],
    mines: 10
  },
  medium: {
    size: [16, 16],
    mines: 40
  },
  hard: {
    size: [32, 16],
    mines: 100
  },
  custom: {
    size: [10, 10],
    mines: 15
  }
}
