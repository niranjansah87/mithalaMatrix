import { TokenTypes } from "../../../constants/mithalaMatrixSpec";
import mithalaMatrix from "../../../module/mithalaMatrixModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.DEKHAU:
        return mithalaMatrix.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return mithalaMatrix.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return mithalaMatrix.getBlockStatement();

      case TokenTypes.MANNUS:
        return mithalaMatrix.getVariableStatement();

      case TokenTypes.YADI:
        return mithalaMatrix.getIfStatement();

      case TokenTypes.JABA_SAMMA:
        return mithalaMatrix.getWhileStatement();

      case TokenTypes.RUKHA:
        return mithalaMatrix.getBreakStatement();
      
      case TokenTypes.ARKO_HERA:
        return mithalaMatrix.getContinueStatement();

      default:
        return mithalaMatrix.getExpressionStatement();
    }
  }
}
