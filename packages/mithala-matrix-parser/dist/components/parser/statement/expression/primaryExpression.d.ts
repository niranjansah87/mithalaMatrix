// import Expression from ".";

// import { TokenTypes } from "../../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../../constants/constants";
// import { ASTNode } from "../../types/nodeTypes";

// import Literal from "./literals";

// export default class PrimaryExpression extends Expression {
//   getExpression(): ASTNode {
//     const token = this._tokenExecutor.getLookahead();

//     switch (token?.type) {
//       case TokenTypes.OPEN_PARENTHESIS_TYPE:
//         return Expression.getExpressionImpl(
//           NodeType.ParanthesizedExpression
//         ).getExpression();
//       case TokenTypes.STRING_TYPE:
//       case TokenTypes.NUMBER_TYPE:
//       case TokenTypes.BOOLEAN_TYPE:
//         return Literal.getLiteralImpl(token.type).getLiteral();
//       case TokenTypes.NALLA_TYPE:
//         return this._getNallaLiteral();
//       default:
//         return this._getLeftHandSideExpression();
//     }
//   }

//   private _getNallaLiteral() {
//     this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.NALLA_TYPE);
//     return Literal.getLiteralImpl(TokenTypes.NALLA_TYPE).getLiteral();
//   }

//   private _getLeftHandSideExpression() {
//     return Expression.getExpressionImpl(
//       NodeType.IdentifierExpression
//     ).getExpression();
//   }
// }
import Expression from './index';
import { ASTNode } from '../../types/nodeTypes';
import '../../../../constants/constants';
import '../../tokenExecutor';
import '../../../tokenizer/types';

declare class PrimaryExpression extends Expression {
    getExpression(): ASTNode;
    private _getNallaLiteral;
    private _getLeftHandSideExpression;
}

export { PrimaryExpression as default };