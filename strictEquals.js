const strictEquals = (numOne, numTwo) => {
  return (typeof numOne == typeof numTwo && numOne == numTwo)
}
module.exports = strictEquals