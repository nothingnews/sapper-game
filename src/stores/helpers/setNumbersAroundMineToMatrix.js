export default (board, coordinates, currentLevelSize) => {
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
