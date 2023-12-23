import TokenExecutor from "../../src/components/parser/tokenExecutor";
import TokenizerImpl from "../../src/components/tokenizer";
import { TokenTypes } from "../../src/constants/mithalaMatrixSpec";

const tokenizerMock = new (<any>TokenizerImpl)() as jest.Mocked<TokenizerImpl>;

tokenizerMock.getNextToken = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});
/* `namaste` is a value assigned to the `value` property of the `lookahead` object. It is
    used as an example value for testing purposes in the `test eatTokenAndForwardLookahead
    success` test case. */
test("test eatTokenAndForwardLookahead success", () => {
  const lookahead = {
    type: TokenTypes.NAMASTE,
    value: "namaste",
  };

  tokenizerMock.getNextToken.mockReturnValueOnce(null);

  const tokenExecutor = new TokenExecutor(tokenizerMock);

  tokenExecutor.setLookahead(lookahead);

  expect(
    tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.NAMASTE)
  ).toStrictEqual({
    type: TokenTypes.NAMASTE,
    value: "namaste",
  });

  expect(tokenizerMock.getNextToken).toHaveBeenCalledTimes(1);
});

test("test eatTokenAndForwardLookahead with null lookahead should throw exception", () => {
  tokenizerMock.getNextToken.mockReturnValueOnce(null);

  const tokenExecutor = new TokenExecutor(tokenizerMock);

  tokenExecutor.setLookahead(null);

  expect(() =>
    tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.NAMASTE)
  ).toThrow(SyntaxError);

  expect(tokenizerMock.getNextToken).toHaveBeenCalledTimes(0);
});

test("test eatTokenAndForwardLookahead with token not matching the expected token type lookahead should throw exception", () => {
  const lookahead = {
    type: TokenTypes.DHANAYABAD,
    value: "dhanayabad",
  };

  tokenizerMock.getNextToken.mockReturnValueOnce(null);

  const tokenExecutor = new TokenExecutor(tokenizerMock);

  tokenExecutor.setLookahead(lookahead);

  expect(() =>
    tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.NAMASTE)
  ).toThrow(SyntaxError);

  expect(tokenizerMock.getNextToken).toHaveBeenCalledTimes(0);
});

test("test getLookahead success", () => {
  const lookahead = {
    type: TokenTypes.NAMASTE,
    value: "dhanayabad",
  };

  const tokenExecutor = new TokenExecutor(tokenizerMock);

  tokenExecutor.setLookahead(lookahead);

  expect(tokenExecutor.getLookahead()).toStrictEqual(lookahead);
});
