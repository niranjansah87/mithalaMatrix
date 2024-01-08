import TokenizerImpl from "../../src/components/tokenizer";
import { SPEC } from "../../src/constants/mithalaMatrixSpec";
import InvalidStateException from "../../src/exceptions/invalidStateException";
import { TokenTypes } from "../../src/constants/mithalaMatrixSpec";
// import { test } from 'jest';
// import { Token } from "../../src/components/tokenizer/types";
// import { Token } from "../../src/components/tokenizer/types";

const tokenizer = new TokenizerImpl(SPEC);

test("test Tokenizer.getNextToken with NAMASTE should success", () => {
  tokenizer.initTokenizer(`namaste`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.NAMASTE,
    value: "namaste",
  });
});

test("test Tokenizer.getNextToken with DHANAYABAD should success", () => {
  tokenizer.initTokenizer(`dhanayabad`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.DHANAYABAD,
    value: "dhanayabad",
  });
});

test("test Tokenizer.getNextToken with STRING_TYPE should success", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.getNextToken()).toStrictEqual({
    type: TokenTypes.STRING_TYPE,
    value: `"hello"`,
  });
});

test("test Tokenizer.getNextToken with empty string should success", () => {
  tokenizer.initTokenizer(` `);

  expect(tokenizer.getNextToken()).toStrictEqual(null);
});

test("test Tokenizer.getNextToken without initTokenizer should throw an exception", () => {
  tokenizer.initTokenizer(``);

  expect(() => tokenizer.getNextToken()).toThrow(InvalidStateException);
});

test("test Tokenizer.getNextToken with un excepted string should throw an exception", () => {
  tokenizer.initTokenizer(`~~~`);

  expect(() => tokenizer.getNextToken()).toThrow(SyntaxError);
});

test("test Tokenizer.initTokenizer with normal string should success", () => {
  expect(() => tokenizer.initTokenizer(`"hello"`)).not.toThrowError();
});

test("test Tokenizer.isEOF with normal string should success", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.isEOF()).toStrictEqual(false);
});

test("test Tokenizer.isEOF without initTokenizer should success", () => {
  tokenizer.initTokenizer(``);

  expect(tokenizer.isEOF()).toStrictEqual(true);
});

test("test Tokenizer.hasMoreTokens with normal string  should success", () => {
  tokenizer.initTokenizer(`"hello"`);

  expect(tokenizer.hasMoreTokens()).toStrictEqual(true);
});

test("test Tokenizer.hasMoreTokens without initTokenizer should success", () => {
  tokenizer.initTokenizer(``);

  expect(tokenizer.hasMoreTokens()).toStrictEqual(false);
});

