// import Statement from ".";

// import { TokenTypes } from "../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../constants/constants";
// import { ASTNode } from "../types/nodeTypes";


// export default class ContinueStatement extends Statement {
//     getStatement(): ASTNode {
//         this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.ARKO_HERA);

//         return {
//             type: NodeType.ContinueStatement
//         }
//     }
// }
import Statement from './index';
import { ASTNode } from '../types/nodeTypes';
import '../../tokenizer/types';
import '../tokenExecutor';

declare class ContinueStatement extends Statement {
    getStatement(): ASTNode;
}

export { ContinueStatement as default };