import type { Size } from '@/types/size.type'
import { useGameStore } from '../GameStore'
import getArrayAroundFieldsCoordinatesByFieldCoordinates from './getArrayAroundFieldsCoordinatesByFieldCoordinates'
import toOpenField from './toOpenField'
import type { Coordinates } from '@/types/coordinates.type'

export default (
  gameStore: ReturnType<typeof useGameStore>,
  size: Size,
  fieldCoordinates: Coordinates
) => {
  const aroundFieldsCoordinates =
    getArrayAroundFieldsCoordinatesByFieldCoordinates(fieldCoordinates)

  aroundFieldsCoordinates.forEach((coord) => {
    const [row, column] = coord
    if (row >= 0 && row < size[0] && column >= 0 && column < size[1]) {
      toOpenField(gameStore, size, coord)
    }
  })
}
