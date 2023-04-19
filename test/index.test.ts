import { expect } from 'chai'
import { naughtsDeterminer } from '..'

describe('naughts determiner', () => {
  it('should return a X horizontal success', () => {
    const testArray: string[] = ["X", "-", "X", "<>", "-", "-", "O", "<>", "-", "-", "X"]
    const actual = naughtsDeterminer(testArray)
    const expected = 1

    expect(actual).to.eql(expected)
  })
})
