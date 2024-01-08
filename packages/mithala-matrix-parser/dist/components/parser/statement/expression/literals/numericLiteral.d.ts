// import Literal from ".";

// import { TokenTypes } from "../../../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../../../constants/constants";
// import { ASTNode } from "../../../types/nodeTypes";

// export default class NumericLiteral extends Literal {
//   getLiteral(): ASTNode {
//     const token = this._tokenExecutor.eatTokenAndForwardLookahead(
//       TokenTypes.NUMBER_TYPE
//     );
//     return {
//       type: NodeType.NumericLiteral,
//       value: Number(token.value),
//     };
//   }
// }
import Literal from './index';
import { ASTNode } from '../../../types/nodeTypes';
import '../../../tokenExecutor';
import '../../../../tokenizer/types';

declare class NumericLiteral extends Literal {
    getLiteral(): ASTNode;
}

export { NumericLiteral as default };