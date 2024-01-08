// import Statement from ".";

// import { TokenTypes } from "../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../constants/constants";
// import { ASTNode } from "../types/nodeTypes";


// export default class BreakStatement extends Statement {
//     getStatement(): ASTNode {
//         this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.RUKHA);

//         return {
//             type: NodeType.BreakStatement
//         }
//     }
// }

import Statement from './index';
import { ASTNode } from '../types/nodeTypes';
import '../../tokenizer/types';
import '../tokenExecutor';

declare class BreakStatement extends Statement {
    getStatement(): ASTNode;
}

export { BreakStatement as default };