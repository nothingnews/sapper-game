import toOpenAroundFields from './toOpenAroundFields'
import { useGameStore } from '../GameStore'
import type { Size } from '@/types/size.type'
import type { Coordinates } from '@/types/coordinates.type'

export default (
  gameStore: ReturnType<typeof useGameStore>,
  size: Size,
  fieldCoordinates: Coordinates
) => {
  const field = gameStore.board[fieldCoordinates[0]][fieldCoordinates[1]]
  field.status = null
  if (field.value === 0 && field.isOpen === false) {
    field.isOpen = true
    toOpenAroundFields(gameStore, size, fieldCoordinates)
    gameStore.setBoard(gameStore.board)
  }
  field.isOpen = true
}
