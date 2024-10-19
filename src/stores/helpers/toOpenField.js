import toOpenAroundFields from './toOpenAroundFields'

export default (gameStore, size, field, fieldCoordinates) => {
  field.icon = null
  if (field.value === 0 && field.isOpen === false) {
    field.isOpen = true
    toOpenAroundFields(gameStore, size, fieldCoordinates)
    gameStore.setBoard(gameStore.board)
  }
  field.isOpen = true
}
