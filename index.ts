// winners:

// 0, 1, 2 = 3
// 4, 5, 6 = 15
// 8, 9, 10 = 27

// 0, 4, 8 = 12
// 1, 5, 9 = 15
// 2, 6, 10 = 18

// 0, 5, 10 = 15
// 2, 5, 8 = 15

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

const checkHorizontalSuccess = (naughtArry: NaughtIter): boolean => {
  const combinedRow = [...naughtArry.X1, ...naughtArry.X1BL].sort()

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
    return accum
  }, arryReduced)

  if (checkHorizontalSuccess(arryReduced)) return arryReduced.X1BL[0]

  // return { message: 'it works!' }
  // console.log(checkHorizontalSuccess(arryReduced))
  // console.log(arryReduced.X1BL[0])
  // return 1
}
