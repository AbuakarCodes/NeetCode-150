let board = [
  ["1", "2", "3", ".", ".", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

function isValidSudoku(board) {
  if (!isRowValid(board)) return false
  else if (!isColunmValid(board)) return false
  else if (!isEachBoxValid(board)) return false
  else return true
}

function isRowValid(board) {
  for (let r = 0; r < board.length; r++) {
    const Row = board[r].filter((e) => e != ".")
    if (!isValidGroup(Row)) return false
  }
  return true
}

function isColunmValid(board) {
  for (let c = 0; c < board.length; c++) {
    let column = []
    for (let r = 0; r < board.length; r++) {
      if (board[r][c] != ".") column.push(board[r][c])
    }

    if (!isValidGroup(column)) return false
  }
  return true
}

function isEachBoxValid(board) {
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      const subGrid = []

      for (let r = row; r < row + 3; r++) {
        const currentRow = []

        for (let c = col; c < col + 3; c++) {
          if (board[r][c] != ".") currentRow.push(board[r][c])
        }
        if (currentRow.length > 0) subGrid.push(currentRow)
      }
      if (!isValidGroup(subGrid.flat())) return false
    }
  }

  return true
}

function isValidGroup(group) {
  const hasNoDuplicate = new Set(group).size === group.length
  const isValidNumber = group.every((element) => element >= 1 && element <= 9)
  return hasNoDuplicate && isValidNumber
}

console.log(isValidSudoku(board))
