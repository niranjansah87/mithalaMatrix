import Statement from ".";

import { TokenTypes } from "../../../constants/mithalaMatrixSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";


export default class ContinueStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.ARKO_HERA);

        return {
            type: NodeType.ContinueStatement
        }
    }
}