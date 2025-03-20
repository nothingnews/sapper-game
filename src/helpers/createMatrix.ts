import type { Board } from '@/types/board.type'

export default (sizeX: number, sizeY: number): Board => {
  return Array.from({ length: sizeX }, () =>
    Array.from({ length: sizeY }, () => {
      return {}
    })
  )
}
