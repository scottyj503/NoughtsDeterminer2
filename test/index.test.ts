import { expect } from 'chai'
import { naughtsDeterminer } from '..'

describe('naughts determiner', () => {
  it('should return a horizontal success', () => {
    const testArray = ["X", "-", "X", "<>", "-", "-", "O", "<>", "-", "-", "X"]
    const actual = naughtsDeterminer(testArray)
    const expected = 1

    expect(actual).to.eql(expected)
  })
})
