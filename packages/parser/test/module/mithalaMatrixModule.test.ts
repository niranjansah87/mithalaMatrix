import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import MithalaMatrixModule from "../../src/module/MithalaMatrixModule";

test("test bhaiLangModule should success", () => {
  expect(MithalaMatrixModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(MithalaMatrixModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(MithalaMatrixModule.getProgram()).toBeInstanceOf(Program);
  expect(MithalaMatrixModule.getParser()).toBeInstanceOf(Parser);
});
