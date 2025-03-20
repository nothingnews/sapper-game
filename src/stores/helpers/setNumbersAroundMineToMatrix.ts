import type { Board } from '@/types/board.type'
import type { Coordinates } from '@/types/coordinates.type'
import type { Size } from '@/types/size.type'

export default (board: Board, coordinates: Coordinates, currentLevelSize: Size) => {
  const [row, column] = coordinates
  if (
    row >= 0 &&
    row < currentLevelSize[0] &&
    column >= 0 &&
    column < currentLevelSize[1] &&
    board[row][column].value > -1
  ) {
    board[row][column].value++
  }
}
