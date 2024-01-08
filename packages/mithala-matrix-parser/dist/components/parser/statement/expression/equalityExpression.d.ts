// // import Expression from ".";

// // import { TokenTypes } from "../../../../constants/mithalaMatrixSpec";
// // import { NodeType } from "../../../../constants/constants";
// // import { ASTNode } from "../../types/nodeTypes";


// // export default class EqualityExpression extends Expression {
// //     getExpression(): ASTNode {
// //         return this.getBinaryExpression(NodeType.RelationalExpression, TokenTypes.EQUALITY_OPERATOR);
// //     }
// // }


// import Expression from './index';
// import { ASTNode } from '../../types/nodeTypes';
// import '../../../../constants/constants';
// import '../../tokenExecutor';
// import '../../../tokenizer/types';

// declare class AssignmentExpression extends Expression {
//     private _logicalORExpression;
//     getExpression(): ASTNode;
//     /**
//      * Whether it is a assignmnet operator
//      * @returns
//      */
//     private _isAssignmentOperator;
//     private _getAssignmentOperator;
//     /**
//      * Extra check whether it's valid assignment target
//      * @param {*} node
//      */
//     private _checkValidAssignmentTarget;
// }

// export { AssignmentExpression as default };
import Expression from './index';
import { ASTNode } from '../../types/nodeTypes';
import '../../../../constants/constants';
import '../../tokenExecutor';
import '../../../tokenizer/types';

declare class EqualityExpression extends Expression {
    getExpression(): ASTNode;
}

export { EqualityExpression as default };