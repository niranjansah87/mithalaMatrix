// import Statement from ".";

// import { TokenTypes } from "../../../constants/mithalaMatrixSpec";
// import { NodeType } from "../../../constants/constants";
// import { ASTNode } from "../types/nodeTypes";

// import Expression from "./expression";


// export default class WhileStatement extends Statement {
//     getStatement(): ASTNode {
//         this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.JABA_SAMMA);

//         this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

//         const test = Expression.getExpressionImpl(
//             NodeType.AssignmentExpression
//             ).getExpression();

//         this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

//         if (this._tokenExecutor.getLookahead() == null) {
//             throw new SyntaxError(`Unexpected end of "jaba samma" statement`);
//         }

//         const body = Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();

//         return {
//             type: NodeType.WhileStatement,
//             test,
//             body
//         };
//     }

// }
import Statement from './index';
import { ASTNode } from '../types/nodeTypes';
import '../../tokenizer/types';
import '../tokenExecutor';

declare class WhileStatement extends Statement {
    getStatement(): ASTNode;
}

export { WhileStatement as default };