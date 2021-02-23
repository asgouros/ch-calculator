import { expect } from "chai";
import Calculator from "./Calculator";
import { InvalidArgumentException } from "./exception/InvalidArgumentException";

let calculator;

describe("Calculator.js", () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add()", () => {
    [
      {
        tc: "#1: Naturals addition",
        a: 123,
        b: 546,
        expected: 669
      },
      {
        tc: "#2: Floats addition, negative outcome",
        a: -3.14,
        b: 3.14,
        expected: 0
      },
      {
        tc: "#3: Negative outcome",
        a: -100,
        b: 3.14,
        expected: -96.86
      },
      {
        tc: "#4: Big number",
        a: 10000000000000,
        b: 3.14,
        expected: 10000000000003.14
      }
    ].forEach((dataSet) => {
      it(
        "correctly adds correct values. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          const actual = calculator.add(dataSet.a, dataSet.b);

          expect(actual).to.equal(dataSet.expected);
        }
      );
    });

    [
      {
        tc: "#1: String addition",
        a: "asds",
        b: 546,
        expectedError: "asds is not a number"
      },
      {
        tc: "#2: String with numeric addition",
        a: "12",
        b: 546,
        expectedError: "12 is not a number"
      },
      {
        tc: "#3: Hex string addition",
        a: 123,
        b: "FF2",
        expectedError: "FF2 is not a number"
      },
      {
        tc: "#4: Boolean addition",
        a: true,
        b: 123,
        expectedError: "true is not a number"
      },
      {
        tc: "#5: Float string addition",
        a: 213,
        b: "37.2",
        expectedError: "37.2 is not a number"
      }
    ].forEach((dataSet) => {
      it(
        "correctly throws error for incorrect values. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          expect(() => {
            calculator.add(dataSet.a, dataSet.b);
          }).to.throw(InvalidArgumentException, dataSet.expectedError);
        }
      );
    });
  });

  describe("subtract()", () => {
    [
      {
        tc: "#1: Naturals",
        a: 100,
        b: 10,
        expected: 90
      },
      {
        tc: "#2: Floats",
        a: -3.14,
        b: 3.14,
        expected: -6.28
      },
      {
        tc: "#3: Negative outcome",
        a: -100,
        b: 3.14,
        expected: -103.14
      },
      {
        tc: "#4: Big number",
        a: 10000000000000,
        b: 3.14,
        expected: 9999999999996.86
      }
    ].forEach((dataSet) => {
      it(
        "correctly subtracts values. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          const actual = calculator.subtract(dataSet.a, dataSet.b);

          expect(actual).to.equal(dataSet.expected);
        }
      );
    });

    [
      {
        tc: "#1: String",
        a: "asds",
        b: 546,
        expectedError: "asds is not a number"
      },
      {
        tc: "#2: String with numeric",
        a: "12",
        b: 546,
        expectedError: "12 is not a number"
      },
      {
        tc: "#3: Hex string",
        a: 123,
        b: "FF2",
        expectedError: "FF2 is not a number"
      },
      {
        tc: "#4: Boolean",
        a: true,
        b: 123,
        expectedError: "true is not a number"
      },
      {
        tc: "#5: Float string",
        a: 213,
        b: "37.2",
        expectedError: "37.2 is not a number"
      }
    ].forEach((dataSet) => {
      it(
        "correctly throws error for incorrect values. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          expect(() => {
            calculator.subtract(dataSet.a, dataSet.b);
          }).to.throw(InvalidArgumentException, dataSet.expectedError);
        }
      );
    });
  });

  describe("multiply()", () => {
    [
      {
        tc: "#1: Naturals",
        a: 100,
        b: 10,
        expected: 1000
      },
      {
        tc: "#2: Floats",
        a: -3.14,
        b: 3.14,
        expected: -9.8596
      },
      {
        tc: "#3: Negative outcome",
        a: -100,
        b: 3.14,
        expected: -314
      },
      {
        tc: "#4: Big number",
        a: 10000000000000,
        b: 3.14,
        expected: 31400000000000
      },
      {
        tc: "#5: Zero value",
        a: 0,
        b: 3.14,
        expected: 0
      }
    ].forEach((dataSet) => {
      it(
        "correctly multiplies values. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          const actual = calculator.multiply(dataSet.a, dataSet.b);

          expect(actual).to.equal(dataSet.expected);
        }
      );
    });

    [
      {
        tc: "#1: String",
        a: "asds",
        b: 546,
        expectedError: "asds is not a number"
      },
      {
        tc: "#2: String with numeric",
        a: "12",
        b: 546,
        expectedError: "12 is not a number"
      },
      {
        tc: "#3: Hex string",
        a: 123,
        b: "FF2",
        expectedError: "FF2 is not a number"
      },
      {
        tc: "#4: Boolean",
        a: true,
        b: 123,
        expectedError: "true is not a number"
      },
      {
        tc: "#5: Float string",
        a: 213,
        b: "37.2",
        expectedError: "37.2 is not a number"
      }
    ].forEach((dataSet) => {
      it(
        "correctly throws error for incorrect values. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          expect(() => {
            calculator.multiply(dataSet.a, dataSet.b);
          }).to.throw(InvalidArgumentException, dataSet.expectedError);
        }
      );
    });
  });

  describe("devide()", () => {
    [
      {
        tc: "#1: Naturals",
        a: 100,
        b: 10,
        expected: 10
      },
      {
        tc: "#2: Floats",
        a: -3.14,
        b: 3.14,
        expected: -1
      },
      {
        tc: "#3: Negative outcome",
        a: -100,
        b: 3.14,
        expected: -31.84713375796178
      },
      {
        tc: "#4: Big number",
        a: 10000000000000,
        b: 3.14,
        expected: 3184713375796.178
      },
      {
        tc: "#5: Zero value",
        a: 0,
        b: 3.14,
        expected: 0
      }
    ].forEach((dataSet) => {
      it(
        "correctly divides values. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          const actual = calculator.devide(dataSet.a, dataSet.b);

          expect(actual).to.equal(dataSet.expected);
        }
      );
    });

    [
      {
        tc: "#1: String",
        a: "asds",
        b: 546,
        expectedError: "asds is not a number"
      },
      {
        tc: "#2: String with numeric",
        a: "12",
        b: 546,
        expectedError: "12 is not a number"
      },
      {
        tc: "#3: Hex string",
        a: 123,
        b: "FF2",
        expectedError: "FF2 is not a number"
      },
      {
        tc: "#4: Boolean",
        a: true,
        b: 123,
        expectedError: "true is not a number"
      },
      {
        tc: "#5: Float string",
        a: 213,
        b: "37.2",
        expectedError: "37.2 is not a number"
      },
      {
        tc: "#6: Division by Zero",
        a: 213,
        b: 0,
        expectedError: "Division by zero"
      }
    ].forEach((dataSet) => {
      it(
        "correctly throws error for incorrect values. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          expect(() => {
            calculator.devide(dataSet.a, dataSet.b);
          }).to.throw(InvalidArgumentException, dataSet.expectedError);
        }
      );
    });
  });

  describe("power()", () => {
    [
      {
        tc: "#1: Naturals",
        a: 100,
        b: 10,
        expected: 100000000000000000000
      },
      {
        tc: "#2: Negative outcome",
        a: -100,
        b: 3,
        expected: -1000000
      },
      {
        tc: "#3: Big number",
        a: 10000000000000,
        b: 3.14,
        expected: 6.606934480075985e40
      },
      {
        tc: "#4: Power of zero",
        a: 10000000000000,
        b: 0,
        expected: 1
      },
      {
        tc: "#5: Zero value",
        a: 0,
        b: 3.14,
        expected: 0
      }
    ].forEach((dataSet) => {
      it(
        "correctly computes power. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          const actual = calculator.power(dataSet.a, dataSet.b);

          expect(actual).to.equal(dataSet.expected);
        }
      );
    });

    [
      {
        tc: "#1: String",
        a: "asds",
        b: 546,
        expectedError: "asds is not a number"
      },
      {
        tc: "#2: String with numeric",
        a: "12",
        b: 546,
        expectedError: "12 is not a number"
      },
      {
        tc: "#3: Hex string",
        a: 123,
        b: "FF2",
        expectedError: "FF2 is not a number"
      },
      {
        tc: "#4: Boolean",
        a: true,
        b: 123,
        expectedError: "true is not a number"
      },
      {
        tc: "#5: Float string",
        a: 213,
        b: "37.2",
        expectedError: "37.2 is not a number"
      },
      {
        tc: "#6: Negative base, fractional exponent",
        a: -3,
        b: 1.1,
        expected: "Negative base, fractional exponent"
      }
    ].forEach((dataSet) => {
      it(
        "correctly throws error for incorrect values. DataSet: " +
          JSON.stringify(dataSet, null, 10),
        () => {
          expect(() => {
            calculator.power(dataSet.a, dataSet.b);
          }).to.throw(InvalidArgumentException, dataSet.expectedError);
        }
      );
    });
  });
});
