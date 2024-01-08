// import Statement from ".";

// import { TokenTypes } from "../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../constants/constants";
// import { ASTNode } from "../types/nodeTypes";

// export default class EmptyStatement extends Statement {
//   getStatement(): ASTNode {
//     this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
//     return {
//       type: NodeType.EmptyStatement,
//     };
//   }
// }
import Statement from './index';
import { ASTNode } from '../types/nodeTypes';
import '../../tokenizer/types';
import '../tokenExecutor';

declare class EmptyStatement extends Statement {
    getStatement(): ASTNode;
}

export { EmptyStatement as default };