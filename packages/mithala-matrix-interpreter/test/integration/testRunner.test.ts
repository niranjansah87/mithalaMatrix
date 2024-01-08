import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
// Import the 'test' function from the 'mocha' package


import { NoOutputPositiveTests, WithOutputPositiveTests } from "./positiveTestsProvider";




let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});


NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});


test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`namaste;
    mannus a = 4;
    {
      mannus a = 90;
      dekhau a;
    }
    dekhau a;
    dhanayabad;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`namaste;
    mannus a = 4;
    {
      a = 90;
      dekhau a;
    }
    dekhau a;
    dhanayabad;`)
    ).not.toThrowError();
    expect(console.log).toHaveBeenCalledWith("90");
    expect(console.log).toHaveBeenCalledWith("90");// Fix: Change 'to.have.been.calledWith' to 'to.have.been.calledWithExactly'
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`namaste;
    mannus a = 4;
    {
      dekhau a;
    }
    dekhau a;
    dhanayabad;`)
  ).not.toThrow();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namaste;
    mannus a = 0;
    jaba samma (a < 2) {
      dekhau "bhai";
      a += 1;
    }
    dhanayabad;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namaste;
    mannus a = 0, b = 0;
    jaba samma (a < 2) {
      jaba samma (b < 1) {
        dekhau "bhai";
        b += 1;
      }
      a += 1;
    }
    dhanayabad;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namaste;
    mannus a = 0;
    jaba samma (a < 2) {
      mannus b = 0;
      jaba samma (b < 2) {
        dekhau "bhai";
        b += 1;
        yadi (b == 1)
          rukha;
      }
      a += 1;
    }
    dhanayabad;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namaste
    mannus a = 0;
    jaba samma (a < 10) {
      dekhau a;
      a += 1;
      yadi (a == 6) {
        rukha;
      }
    }
    dekhau "done";
    dhanayabad
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namaste
    mannus a = 0;
    jaba samma (a < 10) {
      dekhau a;
      a += 1;
      yadi (a == 6)
        rukha;
    }
    dekhau "done";
    dhanayabad
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    namaste
    mannus a = 0;
    jaba samma (a < 10) {
      dekhau a;
      a += 1;
      yadi (a == 3) {
        rukha;
      }
      dekhau "2 baar hi chapunga";
    }
    dekhau "done";
    dhanayabad
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    namaste
    
    jaba samma (sahi) {
      dekhau "bhai";
    }
    dhanayabad;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    namaste
    mannus x = 6;
    yadi (x < 5) {
      dekhau "x < 5";
    } anayatha yadi (x < 8) {
      dekhau "x < 8";
    } yadi (x < 4) {
      dekhau "x < 4";
    } natra {
      dekhau "x > 4";
    }
    dhanayabad;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});


// function expect(_log: (...data: any[]) => void) {
//   throw new Error("Function not implemented.");
// }

function beforeEach(_arg0: () => void) {
  throw new Error("Function not implemented.");
}
// test("jest", () => {
//     interpreter.interpret(`
//     namaste
//     mannus a = 0;
//     jaba samma (a < 10) {
//       dekhau a;
//       a += 1;
//       yadi (a == 3) {
//         rukha;
//       }
//       dekhau "2 baar hi chapunga";
//     }
//     dekhau "done";
//     dhanayabad
//     `);
// });
