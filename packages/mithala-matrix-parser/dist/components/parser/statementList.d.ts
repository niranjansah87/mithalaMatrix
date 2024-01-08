// import { TokenTypes } from "../../constants/mithalaMatrixSpec";
// import MithalaMatrixModule from "../../module/mithalaMatrixModule";

// import Statement from "./statement";
// import TokenExecutor from "./tokenExecutor";

// export default class StatementList {
//   private _tokenExecutor: TokenExecutor;

//   constructor(tokenExecutor: TokenExecutor) {
//     this._tokenExecutor = tokenExecutor;
//   }

//   getInitialStatementList() {
//     for (
//       let lookahead = this._tokenExecutor.getLookahead();
//       lookahead !== null && lookahead.type !== TokenTypes.NAMASTE;
//       lookahead = this._tokenExecutor.getLookahead()
//     ) {
//       this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type);
//     }

//     return MithalaMatrixModule.getInitStatement().getStatement();
//   }

//   getStatementList(stopLookaheadType: string) {
//     const statementlist = [];

//     for (
//       let lookahead = this._tokenExecutor.getLookahead();
//       lookahead !== null && lookahead.type !== stopLookaheadType;
//       lookahead = this._tokenExecutor.getLookahead()
//     ) {
//       // Statement.getStatementImpl(lookahead) -> this will get the Statement
//       // implementation according to look ahead
//       // and we will get the statement by calling getStatement() function
//       statementlist.push(Statement.getStatementImpl(lookahead).getStatement());
//     }

//     return statementlist;
//   }
// }
import { ASTNode } from './types/nodeTypes';
import TokenExecutor from './tokenExecutor';
import '../tokenizer/types';

declare class StatementList {
    private _tokenExecutor;
    constructor(tokenExecutor: TokenExecutor);
    getInitialStatementList(): ASTNode;
    getStatementList(stopLookaheadType: string): ASTNode[];
}

export { StatementList as default };