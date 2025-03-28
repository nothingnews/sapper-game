import type { Coordinates } from '@/types/coordinates.type'

export default (fieldCoordinates: Coordinates): Coordinates[] => {
  const [row, column] = fieldCoordinates
  return [
    [row - 1, column],
    [row + 1, column],
    [row, column - 1],
    [row, column + 1],
    [row + 1, column + 1],
    [row - 1, column - 1],
    [row + 1, column - 1],
    [row - 1, column + 1]
  ]
}
