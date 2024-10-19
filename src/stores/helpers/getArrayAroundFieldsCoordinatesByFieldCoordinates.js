export default (fieldCoordinates) => {
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
