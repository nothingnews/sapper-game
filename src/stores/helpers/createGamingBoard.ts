import setNumbersAroundMineToMatrix from './setNumbersAroundMineToMatrix'
import getArrayAroundFieldsCoordinatesByFieldCoordinates from './getArrayAroundFieldsCoordinatesByFieldCoordinates'
import createMatrix from '@/helpers/createMatrix'
import type { IGameSettings } from '@/types/game-settings.interface'
import type { IField } from '@/types/field.interface'
import type { Coordinates } from '@/types/coordinates.type'

export default (gameSettings: IGameSettings, firstFieldCoordinates: Coordinates): IField[][] => {
  const { size, mines } = gameSettings
  const board: IField[][] = createMatrix(size[0], size[1])
  board.forEach((row, indexRow) => {
    row.forEach((column, indexColumn) => {
      board[indexRow][indexColumn].value = 0
      board[indexRow][indexColumn].isOpen = false
      board[indexRow][indexColumn].status = null
    })
  })
  const minesCoordinates = new Set<string>()
  while (minesCoordinates.size < mines) {
    const randomRow = Math.floor(Math.random() * size[0])
    const randomColumn = Math.floor(Math.random() * size[1])
    const [rowClickedField, columnClickedField] = firstFieldCoordinates
    const aroundBombFieldsCoordinates = getArrayAroundFieldsCoordinatesByFieldCoordinates([
      randomRow,
      randomColumn
    ])
    let isClickedAroundOrOnBomd: boolean = false
    aroundBombFieldsCoordinates.forEach((coordinatesAroundBomb) => {
      const [rowBombedField, columnBombedField] = coordinatesAroundBomb
      if (
        (rowBombedField === rowClickedField && columnBombedField === columnClickedField) ||
        (randomRow === rowClickedField && randomColumn === columnClickedField)
      ) {
        isClickedAroundOrOnBomd = true
      }
    })
    if (isClickedAroundOrOnBomd) {
      continue
    }
    minesCoordinates.add(JSON.stringify([randomRow, randomColumn]))
  }
  const uniqueMinesCoordinates = Array.from(
    minesCoordinates,
    (elem) => JSON.parse(elem) as Coordinates
  )
  for (const coord of uniqueMinesCoordinates) {
    const [row, column] = coord
    board[row][column].value = -1
    const aroundFieldCoordinates = getArrayAroundFieldsCoordinatesByFieldCoordinates(coord)
    aroundFieldCoordinates.forEach((coords) => setNumbersAroundMineToMatrix(board, coords, size))
  }
  return board
}
