// import Expression from ".";

// import { TokenTypes } from "../../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../../constants/constants";
// import { ASTNode } from "../../types/nodeTypes";

// export default class IdentifierExpression extends Expression {
//   getExpression(): ASTNode {
//     const name = this._tokenExecutor.eatTokenAndForwardLookahead(
//       TokenTypes.IDENTIFIER_TYPE
//     ).value;

//     return {
//       type: NodeType.IdentifierExpression,
//       name,
//     };
//   }
// }
import Expression from './index';
import { ASTNode } from '../../types/nodeTypes';
import '../../../../constants/constants';
import '../../tokenExecutor';
import '../../../tokenizer/types';

declare class IdentifierExpression extends Expression {
    getExpression(): ASTNode;
}

export { IdentifierExpression as default };