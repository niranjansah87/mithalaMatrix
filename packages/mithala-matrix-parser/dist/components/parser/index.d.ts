// import { Tokenizer } from "../tokenizer/types";
// import Program from "./program";
// import TokenExecutor from "./tokenExecutor";

// export class Parser {
//   private _tokenizer: Tokenizer;
//   private _program: Program;
//   private _tokenExecutor: TokenExecutor;
//   private _stringToTokenize: string;

//   constructor(
//     tokenizer: Tokenizer,
//     program: Program,
//     tokenExecutor: TokenExecutor
//   ) {
//     this._tokenizer = tokenizer;
//     this._program = program;
//     this._tokenExecutor = tokenExecutor;
//     this._stringToTokenize = "";
//   }

//   parse(stringToTokenize: string) {
//     this._stringToTokenize = stringToTokenize;

//     this._tokenizer.initTokenizer(this._stringToTokenize);

//     // initliaze look ahead
//     this._tokenExecutor.setLookahead(this._tokenizer.getNextToken());

//     return this._program.getProgram();
//   }
// }
import { ASTNode } from './types/nodeTypes';
import { Tokenizer } from '../tokenizer/types';
import Program from './program';
import TokenExecutor from './tokenExecutor';
import './statementList';

declare class Parser {
    private _tokenizer;
    private _program;
    private _tokenExecutor;
    private _stringToTokenize;
    constructor(tokenizer: Tokenizer, program: Program, tokenExecutor: TokenExecutor);
    parse(stringToTokenize: string): ASTNode;
}

export { Parser };