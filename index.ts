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
  X1: number[]
  X1BL: number[]
  X2: number[]
  X2BL: number[]
  X3: number[]
  X3BL: number[]
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

const checkHorizontalSuccess = (naughtArry: NaughtIter, mainPosition: string, blankPosition: string): boolean => {
  const combinedRow = [...naughtArry[mainPosition], ...naughtArry[blankPosition]].sort()

  return isSuccess(combinedRow)
}

export const naughtsDeterminer = (strArry: string[]): number => {
  const arryReduced: NaughtIter = {
    X1: [],
    X1BL: [],
    X2: [],
    X2BL: [],
    X3: [],
    X3BL: []
  }

  strArry.reduce((accum, currStr, indx) => {
    if (indx < 3 && currStr !== '<>') {
      if (currStr === 'X') accum.X1.push(indx)
      if (currStr === '-') accum.X1BL.push(indx)
    }

    if (indx > 3 && indx < 7) {
      if (currStr === 'X') accum.X2.push(indx)
      if (currStr === '-') accum.X2BL.push(indx)
    }
    return accum
  }, arryReduced)

  if (checkHorizontalSuccess(arryReduced, "X1", "X1BL")) return arryReduced.X1BL[0]
  if (checkHorizontalSuccess(arryReduced, "X2", "X2BL")) return arryReduced.X2BL[0]
}
