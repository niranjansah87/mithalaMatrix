// import { TokenTypes } from "../../../../../constants/mithalaMatrixSpec";
// import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
// import mithalaMatrixModule from "../../../../../module/mithalaMatrixModule";
// import TokenExecutor from "../../../tokenExecutor";
// import { ASTNode } from "../../../types/nodeTypes";

// export default abstract class Literal {
//   protected _tokenExecutor: TokenExecutor;

//   constructor(tokenExecutor: TokenExecutor) {
//     this._tokenExecutor = tokenExecutor;
//   }

//   abstract getLiteral(): ASTNode;

//   static getLiteralImpl(tokenType?: string): Literal {
//     switch (tokenType) {
//       case TokenTypes.NUMBER_TYPE:
//         return mithalaMatrixModule.getNumericLiteral();

//       case TokenTypes.BOOLEAN_TYPE:
//         return mithalaMatrixModule.getBooleanLiteral();

//       case TokenTypes.STRING_TYPE:
//         return mithalaMatrixModule.getStringLiteral();

//       case TokenTypes.AKSHAR:
//         return mithalaMatrixModule.getNullLiteral();

//       default:
//         throw new UnsupportedTypeException(
//           `Token type not supproted for literal: ${tokenType}`
//         );
//     }
//   }
// }
import TokenExecutor from '../../../tokenExecutor';
import { ASTNode } from '../../../types/nodeTypes';
import '../../../../tokenizer/types';

declare abstract class Literal {
    protected _tokenExecutor: TokenExecutor;
    constructor(tokenExecutor: TokenExecutor);
    abstract getLiteral(): ASTNode;
    static getLiteralImpl(tokenType?: string): Literal;
}

export { Literal as default };