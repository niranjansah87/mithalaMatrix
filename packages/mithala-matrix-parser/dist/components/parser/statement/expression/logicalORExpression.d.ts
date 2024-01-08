// import Expression from ".";

// import { TokenTypes } from "../../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../../constants/constants";
// import { ASTNode } from "../../types/nodeTypes";


// export default class LogicalORExpression extends Expression {
//     getExpression(): ASTNode {
//         return this.getLogicalExpression(NodeType.LogicalANDExpression, TokenTypes.LOGICAL_OR);
//     }
// }
import Expression from './index';
import { ASTNode } from '../../types/nodeTypes';
import '../../../../constants/constants';
import '../../tokenExecutor';
import '../../../tokenizer/types';

declare class LogicalORExpression extends Expression {
    getExpression(): ASTNode;
}

export { LogicalORExpression as default };