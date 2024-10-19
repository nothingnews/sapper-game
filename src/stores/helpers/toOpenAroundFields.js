import getArrayAroundFieldsCoordinatesByFieldCoordinates from './getArrayAroundFieldsCoordinatesByFieldCoordinates'
import toOpenField from './toOpenField'

export default (gameStore, size, fieldCoordinates) => {
  const aroundFieldsCoordinates =
    getArrayAroundFieldsCoordinatesByFieldCoordinates(fieldCoordinates)

  aroundFieldsCoordinates.forEach((coord) => {
    const [row, column] = coord
    if (row >= 0 && row < size[0] && column >= 0 && column < size[1]) {
      const currentField = gameStore.board[row][column]
      toOpenField(gameStore, size, currentField, coord)
    }
  })
}
