// declare type ASTNode = {
//     type: string;
//     body?: ASTNode | ASTNode[];
//     expressions?: ASTNode[];
//     expression?: ASTNode;
//     operator?: string;
//     name?: string;
//     left?: ASTNode;
//     right?: ASTNode;
//     value?: string | number | null;
//     id?: ASTNode;
//     init?: ASTNode | null;
//     declarations?: ASTNode[];
//     test?: ASTNode;
//     consequent?: ASTNode;
//     alternates?: ASTNode[];
// };

// interface Tokenizer {
//     initTokenizer(stringToTokenize: String): void;
//     isEOF(): boolean;
//     hasMoreTokens(): boolean;
//     getNextToken(): Token | null;
// }
// interface Token {
//     type: string;
//     value: string;
// }

// declare class TokenExecutor {
//     private _tokenizer;
//     private _lookahead;
//     constructor(tokenizer: Tokenizer);
//     eatTokenAndForwardLookahead(tokenType: string | null): Token;
//     eatOptionalSemiColonToken(): void;
//     getLookahead(): Token | null;
//     setLookahead(lookahead: Token | null): void;
// }

// declare class StatementList {
//     private _tokenExecutor;
//     constructor(tokenExecutor: TokenExecutor);
//     getInitialStatementList(): ASTNode;
//     getStatementList(stopLookaheadType: string): ASTNode[];
// }

// declare class Program {
//     private _statementList;
//     constructor(statementList: StatementList);
//     getProgram(): ASTNode;
// }

// declare class Parser {
//     private _tokenizer;
//     private _program;
//     private _tokenExecutor;
//     private _stringToTokenize;
//     constructor(tokenizer: Tokenizer, program: Program, tokenExecutor: TokenExecutor);
//     parse(stringToTokenize: string): ASTNode;
// }

// declare const NodeType: {
//     readonly AdditiveExpression: "AdditiveExpression";
//     readonly MultiplicativeExpression: "MultiplicativeExpression";
//     readonly PrimaryExpression: "PrimaryExpression";
//     readonly ParanthesizedExpression: "ParanthesizedExpression";
//     readonly IdentifierExpression: "IdentifierExpression";
//     readonly AssignmentExpression: "AssignmentExpression";
//     readonly BinaryExpression: "BinaryExpression";
//     readonly LogicalExpression: "LogicalExpression";
//     readonly LogicalANDExpression: "LogicalANDExpression";
//     readonly LogicalORExpression: "LogicalORExpression";
//     readonly RelationalExpression: "RelationalExpression";
//     readonly EqualityExpression: "EqualityExpression";
//     readonly BlockStatement: "BlockStatement";
//     readonly EmptyStatement: "EmptyStatement";
//     readonly ExpressionStatement: "ExpressionStatement";
//     readonly InitStatement: "InitStatement";
//     readonly PrintStatement: "PrintStatement";
//     readonly IfStatement: "IfStatement";
//     readonly WhileStatement: "WhileStatement";
//     readonly BreakStatement: "BreakStatement";
//     readonly ContinueStatement: "ContinueStatement";
//     readonly VariableStatement: "VariableStatement";
//     readonly BooleanLiteral: "BooleanLiteral";
//     readonly NumericLiteral: "NumericLiteral";
//     readonly StringLiteral: "StringLiteral";
//     readonly NullLiteral: "NullLiteral";
//     readonly VariableDeclaration: "VariableDeclaration";
//     readonly Program: "Program";
// };

// declare const _default: Parser;

// export { ASTNode, NodeType, _default as default };
import { Parser } from './components/parser/index';
export { NodeType } from './constants/constants';
export { ASTNode } from './components/parser/types/nodeTypes';
import './components/tokenizer/types';
import './components/parser/program';
import './components/parser/statementList';
import './components/parser/tokenExecutor';

declare const _default: Parser;

export { _default as default };