// import Literal from ".";

// import { NodeType } from "../../../../../constants/constants";
// import { ASTNode } from "../../../types/nodeTypes";

// export default class NullLiteral extends Literal {
//   getLiteral(): ASTNode {
//     return {
//       type: NodeType.NullLiteral,
//       value: "nalla",
//     };
//   }
// }
import Literal from './index';
import { ASTNode } from '../../../types/nodeTypes';
import '../../../tokenExecutor';
import '../../../../tokenizer/types';

declare class NullLiteral extends Literal {
    getLiteral(): ASTNode;
}

export { NullLiteral as default };