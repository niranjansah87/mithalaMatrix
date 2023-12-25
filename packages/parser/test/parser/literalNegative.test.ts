import StringLiteral from "../../src/components/parser/statement/expression/literals/stringLiteral";
import UnsupportedTypeException from "../../src/exceptions/unsupportedTypeException";
import { test } from 'jest';
jest.mock("../../src/module/MithalaMatrixModule");

test("test getLiteralImpl method with unsupported token", () => {
  expect(() => StringLiteral.getLiteralImpl("unsupported token type")).toThrow(
    UnsupportedTypeException
  );
});


