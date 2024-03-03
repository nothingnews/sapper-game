export const LOCALSTORAGE_KEY = 'sapper-game'

export const defaultLocalStorage = [
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

export const gameLevels = [
  {
    name: 'easy',
    size: [8, 8],
    mines: 10
  },
  {
    name: 'medium',
    size: [16, 16],
    mines: 40
  },
  {
    name: 'hard',
    size: [32, 16],
    mines: 100
  },
  {
    name: 'custom',
    size: [10, 10],
    mines: 15
  }
]
