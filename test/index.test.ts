import { expect } from 'chai'
import { naughtsDeterminer } from '..'

describe('naughts determiner', () => {
  it('should return a X horizontal success', () => {
    const testArray: string[] = ["X", "-", "X", "<>", "-", "-", "O", "<>", "-", "-", "X"]
    const actual = naughtsDeterminer(testArray)
    const expected = 1

    expect(actual).to.eql(expected)
  })

  it('should return a X horizontal success for second row', () => {
    const testArray: string[] = ["X", "O", "X", "<>", "-", "X", "X", "<>", "-", "X", "O"]
    const actual = naughtsDeterminer(testArray)
    const expected = 4

    expect(actual).to.eql(expected)

  })
})
