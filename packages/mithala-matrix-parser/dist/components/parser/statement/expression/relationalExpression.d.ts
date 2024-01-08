// import Expression from ".";

// import { TokenTypes } from "../../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../../constants/constants";
// import { ASTNode } from "../../types/nodeTypes";


// export default class RelationalExpression extends Expression {
//     getExpression(): ASTNode {
//         return this.getBinaryExpression(NodeType.AdditiveExpression, TokenTypes.RELATIONAL_OPERATOR);
//     }
// }


import Expression from './index';
import { ASTNode } from '../../types/nodeTypes';
import '../../../../constants/constants';
import '../../tokenExecutor';
import '../../../tokenizer/types';

declare class RelationalExpression extends Expression {
    getExpression(): ASTNode;
}

export { RelationalExpression as default };