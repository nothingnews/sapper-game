import setNumbersAroundMineToMatrix from './setNumbersAroundMineToMatrix'
import getArrayAroundFieldsCoordinatesByFieldCoordinates from './getArrayAroundFieldsCoordinatesByFieldCoordinates'

export default (matrix, mines, size, firstFieldCoordinates = null) => {
  const board = [...matrix]
  board.forEach((row, indexRow) => {
    row.forEach((column, indexColumn) => {
      board[indexRow][indexColumn].value = 0
      board[indexRow][indexColumn].isOpen = false
      board[indexRow][indexColumn].icon = null
    })
  })
  const minesCoordinates = new Set()
  while (minesCoordinates.size < mines) {
    const randomRow = Math.floor(Math.random() * size[0])
    const randomColumn = Math.floor(Math.random() * size[1])
    if (firstFieldCoordinates !== null) {
      const [rowClickedField, columnClickedField] = firstFieldCoordinates
      const aroundBombFieldsCoordinates = getArrayAroundFieldsCoordinatesByFieldCoordinates([
        randomRow,
        randomColumn
      ])
      let isClickedAroundOrOnBomd = false
      aroundBombFieldsCoordinates.forEach((coordinatesAroundBomb) => {
        const [rowBombedField, columnBombedField] = coordinatesAroundBomb
        if (
          (rowBombedField === rowClickedField && columnBombedField === columnClickedField) ||
          (randomRow === rowClickedField && randomColumn === columnClickedField)
        ) {
          isClickedAroundOrOnBomd = true
        }
      })
      if (isClickedAroundOrOnBomd === true) {
        continue
      }
    }
    minesCoordinates.add(JSON.stringify([randomRow, randomColumn]))
  }
  const uniqueMinesCoordinates = Array.from(minesCoordinates, (elem) => JSON.parse(elem))
  for (const coord of uniqueMinesCoordinates) {
    const [row, column] = coord
    board[row][column].value = -1
    const aroundFieldCoordinates = getArrayAroundFieldsCoordinatesByFieldCoordinates(coord)
    aroundFieldCoordinates.forEach((coords) => setNumbersAroundMineToMatrix(board, coords, size))
  }
  return board
}
