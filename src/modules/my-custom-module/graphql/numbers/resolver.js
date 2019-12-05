export default {
  Query: {
    add: (_, { firstNumber, secondNumber }, context, rootValue) => {
      return firstNumber + secondNumber
    }
  }
}
