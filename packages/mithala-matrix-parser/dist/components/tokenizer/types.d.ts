// export interface Tokenizer {
//   initTokenizer(stringToTokenize: String): void;

//   isEOF(): boolean;

//   hasMoreTokens(): boolean;

//   getNextToken(): Token | null;
// }

// export interface Token {
//   type: string;

//   value: string;
// }
interface Tokenizer {
  initTokenizer(stringToTokenize: String): void;
  isEOF(): boolean;
  hasMoreTokens(): boolean;
  getNextToken(): Token | null;
}
interface Token {
  type: string;
  value: string;
}

export { Token, Tokenizer };