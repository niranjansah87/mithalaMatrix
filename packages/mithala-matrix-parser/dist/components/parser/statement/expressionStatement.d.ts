// import Statement from ".";

// import { TokenTypes } from "../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../constants/constants";
// import { ASTNode } from "../types/nodeTypes";

// import Expression from "./expression";

// export default class ExpressionStatement extends Statement {
//   getStatement(): ASTNode {
//     const expression = Expression.getExpressionImpl(
//       NodeType.AssignmentExpression
//     ).getExpression();

//     this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

//     return {
//       type: NodeType.ExpressionStatement,
//       expression,
//     };
//   }
// }
import Statement from './index';
import { ASTNode } from '../types/nodeTypes';
import '../../tokenizer/types';
import '../tokenExecutor';

declare class ExpressionStatement extends Statement {
    getStatement(): ASTNode;
}

export { ExpressionStatement as default };