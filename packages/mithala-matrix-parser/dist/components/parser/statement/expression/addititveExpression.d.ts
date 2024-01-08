// import Expression from ".";

// import { TokenTypes } from "../../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../../constants/constants";
// import { ASTNode } from "../../types/nodeTypes";

// export default class AdditiveExpression extends Expression {
//   getExpression(): ASTNode {
//     return this.getBinaryExpression(
//       NodeType.MultiplicativeExpression,
//       TokenTypes.ADDITIVE_OPERATOR_TYPE
//     );
//   }
// }
import Expression from './index';
import { ASTNode } from '../../types/nodeTypes';
import '../../../../constants/constants';
import '../../tokenExecutor';
import '../../../tokenizer/types';

declare class AdditiveExpression extends Expression {
    getExpression(): ASTNode;
}

export { AdditiveExpression as default };