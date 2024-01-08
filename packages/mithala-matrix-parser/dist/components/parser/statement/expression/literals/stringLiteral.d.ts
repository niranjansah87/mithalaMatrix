// import Literal from ".";

// import { TokenTypes } from "../../../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../../../constants/constants";
// import { ASTNode } from "../../../types/nodeTypes";

// export default class StringLiteral extends Literal {
//   getLiteral(): ASTNode {
//     const token = this._tokenExecutor.eatTokenAndForwardLookahead(
//       TokenTypes.STRING_TYPE
//     );
//     return {
//       type: NodeType.StringLiteral,
//       value: token.value.slice(1, -1),
//     };
//   }
// }
import Literal from "./index";
import { ASTNode } from "../../../types/nodeTypes";
import "../../../tokenExecutor";
import "../../../../tokenizer/types";

declare class StringLiteral extends Literal {
  getLiteral(): ASTNode;
}

export { StringLiteral as default };