import { expect } from 'chai'
import { testFunction } from '..'

describe('when calling your tests...', () => {
  it('should work', () => {
    const actual = testFunction()
    const expected = { message: 'it works!' }

    expect(actual).to.eql(expected)
  })
})
