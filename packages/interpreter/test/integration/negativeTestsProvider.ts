import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/aksharPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          namaste;
          a = 4;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          namaste;
          a += 4;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          namaste;
          a -= 4;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          namaste;
          a -= 4;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          namaste;
          a /= 4;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          namaste;
          a;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          namaste;
          a + b;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          namaste;
          a + 4;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          namaste;
          a - 4;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          namaste;
          a - b;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          namaste;
          a * 4;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          namaste;
          a * b;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          namaste;
          a / 4;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          namaste;
          a / b;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          namaste;
          dekhau a;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          namaste;
          dekhau a, b;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          namaste;
          mannus a = 8;
          dekhau a, b;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          namaste;
          mannus a = b = 8;
          dhanayabad;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        namaste;
        mannus a;
        a = 9;
        mannus a = 0;
        dhanayabad;
      `,
    exception: RuntimeException,
  },
  // cases with akshar
  {
    name: "interpreter use akshar variable in expression, should throw an exception",
    input: `
      namaste;
      mannus a;
      dekhau a + 9;
      dhanayabad;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use akshar variable in expression - 2, should throw an exception",
    input: `
      namaste;
      mannus a = akshar;
      dekhau a + 9;
      dhanayabad;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use akshar in variable initialisation expression, should throw an exception",
    input: `
      namaste;
      mannus a = akshar + 80;
      dhanayabad;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use akshar in variable initialisation expression - 2, should throw an exception",
    input: `
      namaste;
      mannus a = akshar + "jam";
      dhanayabad;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use akshar variable in another variable initialisation expression, should throw an exception",
    input: `
      namaste;
      mannus a;
      mannus b = a + "hello";
      dhanayabad;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use akshar variable in complex expression, should throw an exception",
    input: `
      namaste;
      mannus a;
      mannus b = ((a*9) * a + "hello");
      dhanayabad;
    `,
    exception: NallaPointerException,
  },
  // ramro - naramro case
  {
    name: "interpreter use ramro variable in expression, should throw an exception",
    input: `
      namaste;
      mannus a = ramro;
      dekhau a + 9;
      dhanayabad;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use naramro variable in expression, should throw an exception",
    input: `
      namaste;
      mannus a = naramro;
      dekhau a + 9;
      dhanayabad;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use ramro in variable initialisation expression, should throw an exception",
    input: `
      namaste;
      mannus a = ramro + 80;
      dhanayabad;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use naramro in variable initialisation expression, should throw an exception",
    input: `
      namaste;
      mannus a = naramro + 80;
      dhanayabad;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use ramro variable in another variable initialisation expression, should throw an exception",
    input: `
      namaste;
      mannus a = ramro;
      mannus b = a + "hello";
      dhanayabad;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use naramro variable in complex expression, should throw an exception",
    input: `
      namaste;
      mannus a = naramro;
      mannus b = ((a*9) * a + "hello");
      dhanayabad;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one akshar operand, should throw an exception",
    input: `
        namaste
        (akshar * (4 + 8 + 10));
        dhanayabad
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one akshar operand and one boolean operand, should throw an exception",
    input: `
        namaste
        (akshar * (ramro + 8 + 10));
        dhanayabad
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one akshar operand and one boolean operand - 2, should throw akshar pointer exception",
    input: `
        namaste
        (ramro * (akshar + 8 + 10));
        dhanayabad
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one akshar operand and one boolean operand - 3, should throw akshar pointer exception",
    input: `
        namaste
        (akshar + ramro);
        dhanayabad
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        namaste
        (ramro * (4 + 8 + 10));
        dhanayabad
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        namaste
        ramro + naramro;
        dhanayabad
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        namaste
        mannus a = ramro, b = naramro;
        a + b;
        dhanayabad
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        namaste
        ramro * naramro;
        dhanayabad
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        namaste
        mannus a = ramro, b = naramro;
        a * b;
        dhanayabad
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        namaste
        ramro / naramro;
        dhanayabad
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        namaste
        mannus a = ramro, b = naramro;
        a / b;
        dhanayabad
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing akshar, should throw an exception",
    input: `
        namaste
        dekhau akshar + 5;
        dhanayabad;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing akshar, should throw an exception",
    input: `
        namaste
        mannus a;
        a *= 5;
        dhanayabad;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing ramro, should throw an exception",
    input: `
        namaste
        mannus a = ramro;
        a *= 5;
        dhanayabad;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing akshar - 2, should throw an exception",
    input: `
        namaste
        mannus a = akshar;
        a /= 5;
        dhanayabad;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        namaste
        jaba samma (ramro) {

        }
        dhanayabad;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        namaste
        mannus a = 0;
        jaba samma (a < 2) {
          dekhau "bhai";
        }
        dhanayabad;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        namaste
        mannus a = 0;
        yadi (ramro)
          rukha;
        dhanayabad;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of akshar with &&, should throw an exception",
    input: `
        namaste
        dekhau akshar && 90;
        dhanayabad;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of akshar variable with &&, should throw an exception",
    input: `
        namaste
        mannus a;
        dekhau a && 90;
        dhanayabad;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      namaste;
      dekhau "ramro" % 9;
      dhanayabad;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        namaste
        mannus a = 0;
        jaba samma (a < 2) {
          arko hera;
          a = 5;
        }
        dhanayabad;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        namaste
        mannus a = 0;
        yadi (ramro)
          arko hera
        dhanayabad;
      `,
    output: RuntimeException,
  },
];
