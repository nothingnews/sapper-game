export default (board) => {
  let areAllNotMinedOpened = true
  board.forEach((row) => {
    const rowFields = row.filter((field) => field.value > -1)
    rowFields.forEach((field) => {
      if (field.isOpen === false) {
        areAllNotMinedOpened = false
      }
    })
  })
  return areAllNotMinedOpened
}
