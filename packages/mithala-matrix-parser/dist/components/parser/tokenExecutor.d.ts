// import { TokenTypes } from "../../constants/mithalaMatrixSpec";
// import { Token, Tokenizer } from "../tokenizer/types";


// export default class TokenExecutor {
//   private _tokenizer: Tokenizer;
//   private _lookahead: Token | null = null;

//   constructor(tokenizer: Tokenizer) {
//     this._tokenizer = tokenizer;
//   }

//   eatTokenAndForwardLookahead(tokenType: string | null) {
//     const token = this._lookahead;

//     if (token == null) {
//       throw new SyntaxError(
//         `Unexpected end of input, expected : "${tokenType}"`
//       );
//     }

//     if (token.type !== tokenType) {
//       throw new SyntaxError(
//         `k gardai xau tmi k??...Unexpected token: "${token.value}", expected : "${tokenType}"`
//       );
//     }

//     this.setLookahead(this._tokenizer.getNextToken());

//     return token;
//   }

//   eatOptionalSemiColonToken() {
//     if (this.getLookahead()?.type == TokenTypes.SEMI_COLON_TYPE)
//       this.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
//   }

//   getLookahead() {
//     return this._lookahead;
//   }

//   setLookahead(lookahead: Token | null) {
//     this._lookahead = lookahead;
//   }
// }
import { Tokenizer, Token } from '../tokenizer/types';

declare class TokenExecutor {
    private _tokenizer;
    private _lookahead;
    constructor(tokenizer: Tokenizer);
    eatTokenAndForwardLookahead(tokenType: string | null): Token;
    eatOptionalSemiColonToken(): void;
    getLookahead(): Token | null;
    setLookahead(lookahead: Token | null): void;
}

export { TokenExecutor as default };