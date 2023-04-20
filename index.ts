// winners:

// 0, 1, 2
// 4, 5, 6
// 8, 9, 10

// 0, 4, 8
// 1, 5, 9
// 2, 6, 10

// 0, 5, 10
// 2, 5, 8

// type NaughtIter = {
//   X: {
//     X1: number[]
//     X1BL: number[]
//     X2: number[]
//     X2BL: number[]
//     X3: number[]
//     X3BL: number[]
//   }
// }
type NaughtIter = {
  X0: number[]
  X0BL: number[]
  X1: number[]
  X1BL: number[]
  X2: number[]
  X2BL: number[]
  O0: number[]
  O0BL: number[]
  O1: number[]
  O1BL: number[]
  O2: number[]
  O2BL: number[]

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

const checkHorizontalSuccess = (naughtArry: NaughtIter, mainPosition: string, blankPosition: string): boolean => {
  const combinedRow: number[] = [...naughtArry[mainPosition], ...naughtArry[blankPosition]].sort(numCompare)

  return isSuccess(combinedRow)
}

export const naughtsDeterminer = (strArry: string[]): number => {
  const arryReduced: NaughtIter = {
    X0: [],
    X0BL: [],
    X1: [],
    X1BL: [],
    X2: [],
    X2BL: [],
    O0: [],
    O0BL: [],
    O1: [],
    O1BL: [],
    O2: [],
    O2BL: []
  }

  strArry.reduce((accum, currStr, indx) => {
    const currentRowPos = currStr === "<>" ? Math.floor(indx / 4) + 1 : Math.floor(indx / 4)

    if (currStr === 'X') accum["X" + currentRowPos].push(indx)
    if (currStr === '-') accum["X" + currentRowPos + "BL"].push(indx)

    if (currStr === 'O') accum["O" + currentRowPos].push(indx)
    if (currStr === '-') accum["O" + currentRowPos + "BL"].push(indx)


    return accum
  }, arryReduced)

  if (checkHorizontalSuccess(arryReduced, "X0", "X0BL")) return arryReduced.X0BL[0]
  if (checkHorizontalSuccess(arryReduced, "X1", "X1BL")) return arryReduced.X1BL[0]
  if (checkHorizontalSuccess(arryReduced, "X2", "X2BL")) return arryReduced.X2BL[0]

  if (checkHorizontalSuccess(arryReduced, "O0", "O0BL")) return arryReduced.X0BL[0]

}
