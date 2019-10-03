module.exports = function multiply(first, second) {
  // your solution

  let firstNumber = BigInt(first);
  let secondNumber = BigInt(second);
  let product = firstNumber * secondNumber;
  return product.toString();
}
