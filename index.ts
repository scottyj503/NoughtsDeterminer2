// winners:

// 0, 1, 2
// 4, 5, 6
// 8, 9, 10

// 0, 4, 8
// 1, 5, 9
// 2, 6, 10

// 0, 5, 10
// 2, 5, 8

type TicTacToeBoard = {
  X_0: { selected: number[], blank: number[] }
  X_1: { selected: number[], blank: number[] }
  X_2: { selected: number[], blank: number[] }
  O_0: { selected: number[], blank: number[] }
  O_1: { selected: number[], blank: number[] }
  O_2: { selected: number[], blank: number[] }
}

const horizontalSuccess = [
  [0, 1, 2],
  [4, 5, 6],
  [8, 9, 10]
]

const isSuccess = (numArry: number[]): boolean => {
  let returnVal: boolean = false
  horizontalSuccess.forEach((row) => {
    if (row.toString() === numArry.toString()) returnVal = true
  })
  return returnVal
}

const numCompare = (a: number, b: number): number => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}


const combinedAndCheckSuccess = (row:{ selected: number[], blank: number[] }): boolean => {
  const combinedRow: number[] = [...row.selected, ...row.blank].sort(numCompare)

  return isSuccess(combinedRow)
}

const getSuccessValue = (naughtObj: TicTacToeBoard): number => {

  for (const [_key, value] of Object.entries(naughtObj)) {
    if (combinedAndCheckSuccess(value)) return value.blank[0]
  }
}

export const naughtsDeterminer = (strArry: string[]): number => {
  const ticTacToeBoard: TicTacToeBoard = {
    X_0: { selected: [], blank:[] },
    X_1: { selected: [], blank: [] },
    X_2: { selected: [], blank: [] },
    O_0: { selected: [], blank: [] },
    O_1: { selected: [], blank: [] },
    O_2: { selected: [], blank: [] },
  }

  strArry.reduce((accum, currStr, indx) => {
    const currentRowPos = currStr === "<>" ? Math.floor(indx / 4) + 1 : Math.floor(indx / 4)

    if (currStr === 'X') accum["X_" + currentRowPos].selected.push(indx)
    if (currStr === '-') accum["X_" + currentRowPos].blank.push(indx)

    if (currStr === 'O') accum["O_" + currentRowPos].selected.push(indx)
    if (currStr === '-') accum["O_" + currentRowPos].blank.push(indx)

    return accum
  }, ticTacToeBoard)

  return getSuccessValue(ticTacToeBoard)
}
