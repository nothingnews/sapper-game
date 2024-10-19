export default (sizeX, sizeY) => {
  return Array.from({ length: sizeX }, () =>
    Array.from({ length: sizeY }, () => {
      return {}
    })
  )
}
