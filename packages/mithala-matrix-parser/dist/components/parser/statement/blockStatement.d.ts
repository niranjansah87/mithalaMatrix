// import Statement from ".";

// import { TokenTypes } from "../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../constants/constants";
// import StatementList from "../statementList";
// import TokenExecutor from "../tokenExecutor";
// import { ASTNode } from "../types/nodeTypes";

// export default class BlockStatement extends Statement {
//   _statementList: StatementList;

//   constructor(tokenExecutor: TokenExecutor, statementList: StatementList) {
//     super(tokenExecutor);
//     this._statementList = statementList;
//   }

//   getStatement(): ASTNode {
//     this._tokenExecutor.eatTokenAndForwardLookahead(
//       TokenTypes.OPEN_CURLY_BRACE_TYPE
//     );

//     const body =
//       this._tokenExecutor.getLookahead()?.type ===
//       TokenTypes.CLOSED_CURLY_BRACE_TYPE
//         ? []
//         : this._statementList.getStatementList(
//             TokenTypes.CLOSED_CURLY_BRACE_TYPE
//           );

//     this._tokenExecutor.eatTokenAndForwardLookahead(
//       TokenTypes.CLOSED_CURLY_BRACE_TYPE
//     );

//     this._tokenExecutor.eatOptionalSemiColonToken();

//     return {
//       type: NodeType.BlockStatement,
//       body,
//     };
//   }
// }
import Statement from './index';
import StatementList from '../statementList';
import TokenExecutor from '../tokenExecutor';
import { ASTNode } from '../types/nodeTypes';
import '../../tokenizer/types';

declare class BlockStatement extends Statement {
    _statementList: StatementList;
    constructor(tokenExecutor: TokenExecutor, statementList: StatementList);
    getStatement(): ASTNode;
}

export { BlockStatement as default };