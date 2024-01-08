// import Statement from ".";

// import { TokenTypes } from "../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../constants/constants";
// import StatementList from "../statementList";
// import TokenExecutor from "../tokenExecutor";
// import { ASTNode } from "../types/nodeTypes";

// export default class InitStatement extends Statement {
//   _statementList: StatementList;

//   constructor(tokenExecutor: TokenExecutor, statementList: StatementList) {
//     super(tokenExecutor);
//     this._statementList = statementList;
//   }

//   getStatement(): ASTNode {
//     this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.NAMASTE);

//     this._tokenExecutor.eatOptionalSemiColonToken();

//     const body =
//       this._tokenExecutor.getLookahead()?.type !== TokenTypes.DHANAYABAD
//         ? this._statementList.getStatementList(TokenTypes.DHANAYABAD)
//         : [];

//     this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.DHANAYABAD);

//     this._tokenExecutor.eatOptionalSemiColonToken();

//     return {
//       type: NodeType.InitStatement,
//       body,
//     };
//   }
// }
import Statement from './index';
import StatementList from '../statementList';
import TokenExecutor from '../tokenExecutor';
import { ASTNode } from '../types/nodeTypes';
import '../../tokenizer/types';

declare class InitStatement extends Statement {
    _statementList: StatementList;
    constructor(tokenExecutor: TokenExecutor, statementList: StatementList);
    getStatement(): ASTNode;
}

export { InitStatement as default };