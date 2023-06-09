import { expect } from 'chai'
import { naughtsDeterminer } from '..'

describe('naughts determiner', () => {
  context('X Horizontal success', () => {
    it('should return a X horizontal success', () => {
      const testArray: string[] = ['X', '-', 'X', '<>', '-', '-', 'O', '<>', '-', '-', 'X']
      const actual = naughtsDeterminer(testArray)
      const expected = 1

      expect(actual).to.eql(expected)
    })

    it('should return a X horizontal success for second row', () => {
      const testArray: string[] = ['X', 'O', 'X', '<>', '-', 'X', 'X', '<>', '-', 'X', 'O']
      const actual = naughtsDeterminer(testArray)
      const expected = 4

      expect(actual).to.eql(expected)
    })
    it('should return a X horizontal success for third row', () => {
      const testArray: string[] = ['X', 'O', 'X', '<>', 'O', 'X', 'O', '<>', 'X', 'X', '-']
      const actual = naughtsDeterminer(testArray)
      const expected = 10

      expect(actual).to.eql(expected)
    })
  })

  context('O Horizontal Row', () => {
    it('should return success for the first row', () => {
      const testArray: string[] = ['O', 'O', '-', '<>', 'O', '-', 'X', '<>', '-', 'X', 'O']
      const actual = naughtsDeterminer(testArray)
      const expected = 2

      expect(actual).to.eql(expected)
    })

    it('should return success for the second row', () => {
      const testArray: string[] = ['O', 'X', '-', '<>', 'O', 'O', '-', '<>', 'X', '-', 'O']
      const actual = naughtsDeterminer(testArray)
      const expected = 6

      expect(actual).to.eql(expected)
    })

    it('should return success for the second row', () => {
      const testArray: string[] = ['O', 'X', '-', '<>', '-', 'O', 'X', '<>', '-', 'O', 'O']
      const actual = naughtsDeterminer(testArray)
      const expected = 8

      expect(actual).to.eql(expected)
    })
  })

  context('X Vertical success', () => {
    it('should return a success for the first left row', () => {
      const testArray: string[] = ['X', 'X', 'O', '<>', '-', 'O', 'X', '<>', 'X', 'O', 'O']
      const actual = naughtsDeterminer(testArray)
      const expected = 4

      expect(actual).to.eql(expected)
    })
  })
})
