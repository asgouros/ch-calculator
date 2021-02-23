import { InvalidArgumentException } from "./exception/InvalidArgumentException";

/**
 *  Calculator contains simple functions to perform the following actions:
 *  - Addition
 *  - Subtraction
 *  - Multiplication
 *  - Division
 *  - Power
 */
export default class Calculator {
  /**
   * Check that passed value is a valid number
   *
   * @param {*} value
   * @returns {this}
   *
   * @throws {InvalidArgumentException}
   * @private
   */
  _validate(value) {
    if (typeof value !== "number") {
      throw new InvalidArgumentException(`Passed value: ${value} is not a number!`);
    }

    return this;
  }
  
  /**
   * Add new numeric values
   *
   * @param {number} a
   * @param {number} b
   * 
   * @throws {InvalidArgumentException}
   */
  add(a, b) {
    this._validate(a)._validate(b);

    return (a + b);
  }

  /**
   * Subtract b from a
   *
   * @param {number} a
   * @param {number} b
   * 
   * @throws {InvalidArgumentException}
   */
  subtract(a, b) {
    this._validate(a)._validate(b);

    return (a - b);
  }

  /**
   * Devide a / b
   *
   * @param {number} a
   * @param {number} b
   * 
   * @throws {InvalidArgumentException}
   */
  devide(a, b) {
    this._validate(a)._validate(b);

    if (b === 0) {
        throw new InvalidArgumentException('Division by zero!');
    }

    return (a / b);
  }

  /**
   * Raising a to the power of b
   *
   * @param {number} a
   * @param {number} b
   * 
   * @throws {InvalidArgumentException}
   */
  power(a, b) {
    this._validate(a)._validate(b);

    if ((a < 0) && !Number.isInteger(b)) {
      throw new InvalidArgumentException('Negative base, fractional exponent is not allowed');
    }

    return (a ** b);
  }

  /**
   * Multiply b to a
   *
   * @param {number} a
   * @param {number} b
   * 
   * @throws {InvalidArgumentException}
   */
  multiply(a, b) {
    this._validate(a)._validate(b);

    return (a * b);
  }

  
}
