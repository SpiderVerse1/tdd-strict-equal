const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strictEquals')

describe('Equals', () => {
  describe('strictEquals', () => {
    it('returns false when given values of different type', () => {

      const checkNumOne = 5
      const checkNumTwo = '5'

      const checkRes = strictEquals(checkNumOne, checkNumTwo)

      expect(checkRes).to.equal(false)
    })
    it('return false if its a same type', () => {

      const checkNumOne = 3
      const checkNumTwo = 5
      const checkRes = strictEquals(checkNumOne, checkNumTwo)

      expect(checkRes).to.equal(false)
    })
    it('returns false when given unequal values', () => {

      const checkNumOne = 9
      const checkNumTwo = 'buck'

      const checkRes = strictEquals(checkNumOne, checkNumTwo)

      expect(checkRes).to.equal(false)
    })
    it('returns false when given unequal values', () => {

      const checkNumOne = 'help'
      const checkNumTwo = 'yep'

      const checkRes = strictEquals(checkNumOne, checkNumTwo)

      expect(checkRes).to.equal(false)
    })
    it('returns true when given unequal values', () => {

      const checkNumOne = 10
      const checkNumTwo = 10

      const checkRes = strictEquals(checkNumOne, checkNumTwo)

      expect(checkRes).to.equal(true)
    })
  })
})