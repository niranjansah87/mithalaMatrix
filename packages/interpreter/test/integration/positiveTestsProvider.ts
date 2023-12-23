export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      namaste
      dhanayabad
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      namaste
      dhanayabad
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      namaste
      ;
      dhanayabad
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      namaste
      ;
      ;
      ;;
      dhanayabad
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      namaste
      {};
      dhanayabad
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      namaste
      {
        mannus a = 4;
      }
      dhanayabad
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      namaste
      mannus a, b, c;
      dhanayabad
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      namaste
      mannus a = 10, b = "crap";
      dhanayabad
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      namaste
      mannus a = 10, b = 5;
      dhanayabad
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      namaste
      mannus a = 7 + 90;
      dhanayabad
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      namaste
      mannus a = ramro;
      a = 4;
      dhanayabad
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      namaste
      mannus a = 2;
      a *= 4;
      dhanayabad
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      namaste
      mannus a = 2;
      (a + 4);
      dhanayabad
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      namaste
      mannus a = 2;
      (a + 4) * 10 + (5 - 4);
      dhanayabad
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      namaste
      mannus a = 2;
      (a * (4 + 8) + 10);
      dhanayabad
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    namaste
    mannus x = 9;
    yadi (x != 9) {
      x = 5;
      dekhau x;
    } natra (x >= 9);
    dhanayabad;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      namaste;
      mannus a , b;
      a = b = 60;
      dekhau a, b;
      dhanayabad
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with akshar and "==", should success`,
    input: `
      namaste;
      mannus a;
      yadi (a == akshar) {
        dekhau a;
      }
      dhanayabad
    `,
    output: "akshar",
  },
  {
    name: `binaryExpression print test with akshar without any operator, should success`,
    input: `
      namaste;
      mannus a;
      yadi (a) {
        dekhau a;
      } natra {
        dekhau "not akshar";
      }
      dhanayabad
    `,
    output: "not akshar",
  },
  {
    name: `binaryExpression print test - comparing akshar with akshar "==", should success`,
    input: `
      namaste;
      yadi (akshar == akshar) {
        dekhau "akshar";
      }
      dhanayabad
    `,
    output: "akshar",
  },
  {
    name: `binaryExpression print test with comparing akshar with var "a", should success`,
    input: `
      namaste;
      mannus a;
      yadi (akshar == a) {
        dekhau "akshar";
      }
      dhanayabad
    `,
    output: "akshar",
  },
  {
    name: `binaryExpression print test with comparing akshar with var "a" explicit initialization, should success`,
    input: `
      namaste;
      mannus a = akshar;
      yadi (akshar == a) {
        dekhau "akshar";
      }
      dhanayabad
    `,
    output: "akshar",
  },
  {
    name: `binaryExpression print test with comparing akshar with string akshar, should success`,
    input: `
      namaste;
      mannus a = akshar;
      yadi ("akshar" == a) {
        dekhau "akshar";
      } natra {
        dekhau "not akshar";
      }
      dhanayabad
    `,
    output: "not akshar",
  },
  {
    name: `binaryExpression print test with comparing akshar with string akshar, should success`,
    input: `
      namaste;
      mannus a = "akshar";
      yadi (akshar == a) {
        dekhau "akshar";
      } natra {
        dekhau "not akshar";
      }
      dhanayabad
    `,
    output: "not akshar",
  },
  {
    name: `binaryExpression print test with comparing akshar with string null, should success`,
    input: `
      namaste;
      mannus a = "null";
      yadi (akshar == a) {
        dekhau "akshar";
      } natra {
        dekhau "not akshar";
      }
      dhanayabad
    `,
    output: "not akshar",
  },
  {
    name: `binaryExpression print test with akshar var "a" & "b" - 0, should success`,
    input: `
      namaste;
      mannus a;
      mannus b;
      yadi (a == b) {
        dekhau "akshar";
      } natra {
        dekhau "xain akshar";
      }
      dhanayabad
    `,
    output: "akshar",
  },
  {
    name: `binaryExpression print test with akshar var "a" & "b" - 1, should success`,
    input: `
      namaste;
      mannus a;
      mannus b = akshar;
      yadi (a == b) {
        dekhau "akshar";
      } natra {
        dekhau "xain akshar";
      }
      dhanayabad
    `,
    output: "akshar",
  },
  {
    name: `binaryExpression print test with akshar var "a" & "b" -2, should success`,
    input: `
      namaste;
      mannus a;
      mannus b = "akshar";
      yadi (a == b) {
        dekhau "akshar";
      } natra {
        dekhau "xain akshar";
      }
      dhanayabad
    `,
    output: "xain akshar",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - ramro, should success`,
    input: `
      namaste;
      mannus a = ramro;
      yadi (ramro == a) {
        dekhau "ramro";
      } natra {
        dekhau "xain ramro";
      }
      dhanayabad
    `,
    output: "ramro",
  },
  {
    name: `binaryExpression print test with boolean expression - naramro, should success`,
    input: `
      namaste;
      mannus a = naramro;
      yadi (naramro == a) {
        dekhau "naramro";
      } natra {
        dekhau "naramro";
      }
      dhanayabad
    `,
    output: "naramro",
  },
  {
    name: `binaryExpression print test with boolean expression - ramro with string ramro, should success`,
    input: `
      namaste;
      mannus a = "ramro";
      yadi (ramro == a) {
        dekhau "ramro";
      } natra {
        dekhau "xain ramro";
      }
      dhanayabad
    `,
    output: "xain ramro",
  },
  {
    name: `binaryExpression print test with boolean expression - ramro expression, should success`,
    input: `
      namaste;
      mannus a = 7;
      yadi (ramro == (a > 5)) {
        dekhau "ramro";
      } natra {
        dekhau "xain ramro";
      }
      dhanayabad
    `,
    output: "ramro",
  },
  {
    name: `binaryExpression print test with boolean expression - ramro expression & string "ramro", should success`,
    input: `
      namaste;
      mannus a = 7;
      yadi ("ramro" == (a > 5)) {
        dekhau "ramro";
      } natra {
        dekhau "xain ramro";
      }
      dhanayabad
    `,
    output: "xain ramro",
  },
  {
    name: `binaryExpression print test with boolean expression - ramro expression & two expressions, should success`,
    input: `
      namaste;
      mannus a = ramro;
      yadi ("ramro" == (a == ramro)) {
        dekhau "ramro";
      } natra {
        dekhau "xain ramro";
      }
      dhanayabad
    `,
    output: "xain ramro",
  },
  {
    name: `binaryExpression print test with boolean expression - ramro expression -3, should success`,
    input: `
      namaste;
      mannus a = ramro;
      yadi ((a == ramro) == (a == ramro)) {
        dekhau "ramro";
      } natra {
        dekhau "xain ramro";
      }
      dhanayabad
    `,
    output: "ramro",
  },
  {
    name: `binaryExpression print test with boolean expression - ramro expression - 4, should success`,
    input: `
      namaste;
      mannus a;
      yadi ((a == akshar) == (a == ramro)) {
        dekhau "ramro";
      } natra {
        dekhau "xain ramro";
      }
      dhanayabad
    `,
    output: "xain ramro",
  },
  {
    name: `binaryExpression print test with boolean expression - ramro expression - 5, should success`,
    input: `
      namaste;
      mannus a;
      yadi ((a == akshar) == (a == ramro)) {
        dekhau "ramro";
      } natra {
        dekhau "xain ramro";
      }
      dhanayabad
    `,
    output: "xain ramro",
  },
  {
    name: `binaryExpression print test with boolean expression - ramro expression - 5, should success`,
    input: `
      namaste;
      mannus a;
      mannus b = naramro;
      yadi (a == b) {
        dekhau "ramro";
      } natra {
        dekhau "xain ramro";
      }
      dhanayabad
    `,
    output: "xain ramro",
  },
  {
    name: `binaryExpression print test with boolean expression - naramro variables comparison, should success`,
    input: `
      namaste;
      mannus a = naramro;
      mannus b = naramro;
      yadi (a == b) {
        dekhau "naramro";
      } natra {
        dekhau "xain naramro";
      }
      dhanayabad
    `,
    output: "naramro",
  },
  {
    name: `binaryExpression print test with boolean expression - naramro variables comparison with string naramro, should success`,
    input: `
      namaste;
      mannus a = "naramro";
      mannus b = naramro;
      yadi (a == b) {
        dekhau "naramro";
      } natra {
        dekhau "xain naramro";
      }
      dhanayabad
    `,
    output: "xain naramro",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      namaste
      mannus a = 1.2, b = 2;
      dekhau a + b;
      dhanayabad
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      namaste
      mannus a = 1.2, b = 2.3;
      dekhau a + b;
      dhanayabad
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      namaste;
      mannus a = 2, b = 60;
      dekhau (a * (4 + 8) + 10), b;
      dhanayabad
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      namaste;
      mannus a = 2, b = 60;

      a = b + 3;
      dekhau a, b;
      dhanayabad
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      namaste;
      dekhau "hello", ramro, naramro;
      dhanayabad
    `,
    output: "hello ramro naramro",
  },
  {
    name: "printStatement test with akshar, should success",
    input: `
      namaste;
      dekhau akshar;
      dhanayabad;
    `,
    output: "akshar",
  },
  {
    name: "printStatement test with akshar as second parameter, should success",
    input: `
      namaste;
      dekhau 10, akshar;
      dhanayabad;
    `,
    output: "10 akshar",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      namaste;
      dekhau "hello" + "crap";
      dhanayabad;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including akshar, should success",
    input: `
      namaste;
      mannus a = 70;
      dekhau 6*5, akshar, "jamtara", a;
      dhanayabad;
    `,
    output: "30 akshar jamtara 70",
  },
  {
    name: "printStatement test with akshar variable, should success",
    input: `
      namaste;
      mannus a;
      dekhau a;
      dhanayabad;
    `,
    output: "akshar",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      namaste;
      dekhau "undefined";
      dhanayabad;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with akshar variable, should success`,
    input: `
      namaste;
      mannus a;
      dekhau a;
      dhanayabad;
    `,
    output: "akshar",
  },
  {
    name: `printStatement test with ramro variable, should success`,
    input: `
      namaste;
      mannus a = ramro;
      dekhau a;
      dhanayabad;
    `,
    output: "ramro",
  },
  {
    name: `printStatement test with naramro variable, should success`,
    input: `
      namaste;
      mannus a = naramro;
      dekhau a;
      dhanayabad;
    `,
    output: "naramro",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      namaste;
      mannus a;
      dekhau a = 90;
      dhanayabad;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      namaste;
      dekhau 9 && 10;
      dhanayabad;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      namaste;
      dekhau 9 || 10;
      dhanayabad;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      namaste;
      dekhau naramro && ramro;
      dhanayabad;
    `,
    output: "naramro",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    namaste;
    mannus a = ramro;
    dekhau a && naramro;
    dhanayabad;
    `,
    output: "naramro",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    namaste;
    mannus a = ramro;
    dekhau a && ramro;
    dhanayabad;
    `,
    output: "ramro",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      namaste;
      dekhau 9 == 10;
      dhanayabad;
    `,
    output: "naramro",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      namaste;
      dekhau 9 != 10;
      dhanayabad;
    `,
    output: "ramro",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      namaste;
      dekhau 9 || 10;
      dhanayabad;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      namaste;
      dekhau naramro || ramro;
      dhanayabad;
    `,
    output: "ramro",
  },
  {
    name: `printStatement test with boolean ramro naramro and logical, should success`,
    input: `
      namaste;
      dekhau ramro != 10;
      dhanayabad;
    `,
    output: "ramro",
  },
  {
    name: `printStatement test with boolean ramro and string "ramro", should success`,
    input: `
      namaste;
      dekhau "ramro" == ramro;
      dhanayabad;
    `,
    output: "naramro",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      namaste;
      mannus a = 0;
      jaba samma b(a < 1) {
        dekhau "bhai";
        a += 1;
      }
      dhanayabad;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      namaste;
      jaba samma b(ramro) 
        rukha;
      dekhau "end";
      dhanayabad;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      namaste;
      mannus a = 0;
      jaba samma b(a < 2) {
        jaba samma b(ramro)
          rukha;
        dekhau "hello";
        yadi (ramro)
          rukha;
      }
      dhanayabad;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      namaste;
      mannus a = 0;
      jaba samma b(a < 2) {
        dekhau "hello";
        yadi (ramro)
          rukha;
        rukha;
        rukha;
      }
      dhanayabad;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    namaste
    yadi (ramro) {
      dekhau "bhai";
    }
    dhanayabad;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    namaste
    yadi (ramro) {
      dekhau "ramro";
    } natra {
      dekhau "naramro";
    }
    dhanayabad;
    `,
    output: "ramro",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    namaste
    mannus x = 9;
    yadi (x >= 9) {
      x = 5;
      dekhau x;
    } 
    dhanayabad;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    namaste
    yadi (naramro) {
      dekhau "naramro";
    } anayatha yadi(ramro) {
      dekhau "ramro";
    }
    dhanayabad;
    `,
    output: "ramro",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    namaste
    mannus x = 10;
    yadi (x < 5) {
      dekhau "x < 5";
    } anayatha yadi(x < 8) {
      dekhau "x < 8";
    } anayatha yadi(x < 12) {
      dekhau "x < 12";
    } anayatha yadi(x < 15) {
      dekhau "x < 15";
    }
    dhanayabad;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    namaste
    mannus a = 15;
    yadi (a < 0) {
      dekhau "a < 0";
    } anayatha yadi(a > 0) {
      yadi (a < 10) {
        dekhau "a < 10";
      } anayatha yadi(a < 20) {
        dekhau "a < 20";
      }
    }
    dhanayabad
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    namaste
    mannus x = 15;
    yadi (x < 5) {
      dekhau "x < 5";
    } anayatha yadi(x < 8) {
      dekhau "x < 8";
    } anayatha yadi(x < 12) {
      dekhau "x < 12";
    } natra {
      dekhau "x > 12";
    }
    dhanayabad;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with ramro naramro, should success`,
    input: `
        namaste
        yadi (ramro && naramro) {
          dekhau "ramro";
        } natra {
          dekhau "naramro";
        }
        dhanayabad;
      `,
    output: `naramro`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        namaste
        dekhau 90 % 9;
        dhanayabad;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        namaste
        dekhau 27 % 5;
        dhanayabad;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        namaste
        dekhau 5 % 20;
        dhanayabad;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      namaste;
      mannus a = 5;
      mannus step = 0;
      jaba samma b(a > 0) {
        step += 1;
        yadi (a % 2 != 0){
          a -= 2;
          arko hera;
        }
        a -= 1;
      }
      dekhau step;
      dhanayabad;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      namaste;
      mannus a = 5;
      mannus step = 0;
      jaba samma b(a > 0) {
        step += 1;
        yadi (a % 2 == 0){
          a -= 2;
          arko hera;
        }
        a -= 1;
        arko hera;
        dekhau "oye oye oye.. yha tk nhi aaxaintha bhai";
      }
      dekhau step;
      dhanayabad;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      namaste;
      mannus a = 10;
      mannus step = 0;
      jaba samma b(a > 0) {
        yadi (a % 2 == 0){
          a -= 3;
          arko hera;
        }
        a -= 1;
        yadi (step == 1) arko hera
        step += 1;
      }
      dekhau step;
      dhanayabad;
    `,
    output: "1",
  },
];