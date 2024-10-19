export const LOCALSTORAGE_KEY = 'sapper-game'

export const DEFAULT_LOCAL_STORAGE_VALUES = [
  { id: 1, nickname: 'Alice', time: 10 },
  { id: 2, nickname: 'Bob', time: 20 },
  { id: 3, nickname: 'Charlie', time: 30 },
  { id: 4, nickname: 'David', time: 40 },
  { id: 5, nickname: 'Eve', time: 50 },
  { id: 6, nickname: 'Frank', time: 60 },
  { id: 7, nickname: 'Grace', time: 70 },
  { id: 8, nickname: 'Henry', time: 80 },
  { id: 9, nickname: 'Ivy', time: 90 },
  { id: 10, nickname: 'Jack', time: 100 }
]

export const GAME_STATUSES = {
  WIN: 'WIN',
  LOSE: 'LOSE',
  GAMING: 'GAMING',
  READY: 'READY'
}

export const FIELD_STATUSES = {
  QUESTION: 'QUESTION',
  FLAG: 'FLAG'
}

export const ROUTES = {
  RESULTS: '/results',
  SETTINGS: '/',
  GAME: '/game'
}

export const LEVEL_NAMES = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD',
  CUSTOM: 'CUSTOM'
}

export const GAME_LEVELS = {
  [LEVEL_NAMES.EASY]: {
    size: [8, 8],
    mines: 10
  },
  [LEVEL_NAMES.MEDIUM]: {
    size: [16, 16],
    mines: 40
  },
  [LEVEL_NAMES.HARD]: {
    size: [32, 16],
    mines: 100
  },
  [LEVEL_NAMES.CUSTOM]: {
    size: [10, 10],
    mines: 15
  }
}
