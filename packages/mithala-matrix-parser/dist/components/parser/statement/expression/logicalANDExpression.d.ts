// import Expression from ".";

// import { TokenTypes } from "../../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../../constants/constants";
// import { ASTNode } from "../../types/nodeTypes";


// export default class LogicalANDExpression extends Expression {
//     getExpression(): ASTNode {
//         return this.getLogicalExpression(NodeType.EqualityExpression, TokenTypes.LOGICAL_AND);
//     }
// }


import Expression from './index';
import { ASTNode } from '../../types/nodeTypes';
import '../../../../constants/constants';
import '../../tokenExecutor';
import '../../../tokenizer/types';

declare class LogicalANDExpression extends Expression {
    getExpression(): ASTNode;
}

export { LogicalANDExpression as default };