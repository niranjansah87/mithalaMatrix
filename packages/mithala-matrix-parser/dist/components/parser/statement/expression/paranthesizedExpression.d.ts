// import Expression from ".";

// import { TokenTypes } from "../../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../../constants/constants";
// import { ASTNode } from "../../types/nodeTypes";


// export default class ParanthesizedExpression extends Expression {
//   getExpression(): ASTNode {
//     this._tokenExecutor.eatTokenAndForwardLookahead(
//       TokenTypes.OPEN_PARENTHESIS_TYPE
//     );

//     const expression = Expression.getExpressionImpl(
//       NodeType.AssignmentExpression
//     ).getExpression();

//     this._tokenExecutor.eatTokenAndForwardLookahead(
//       TokenTypes.CLOSED_PARENTHESIS_TYPE
//     );

//     return expression;
//   }
// }
import Expression from './index';
import { ASTNode } from '../../types/nodeTypes';
import '../../../../constants/constants';
import '../../tokenExecutor';
import '../../../tokenizer/types';

declare class ParanthesizedExpression extends Expression {
    getExpression(): ASTNode;
}

export { ParanthesizedExpression as default };