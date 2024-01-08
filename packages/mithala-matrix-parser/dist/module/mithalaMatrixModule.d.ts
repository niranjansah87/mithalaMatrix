import { Parser } from "../components/parser";
import Program from "../components/parser/program";
import BlockStatement from "../components/parser/statement/blockStatement";
import BreakStatement from "../components/parser/statement/breakStatement";
import ContinueStatement
  from "../components/parser/statement/continueStatement";
import EmptyStatement from "../components/parser/statement/emptyStatement";
import AdditiveExpression
  from "../components/parser/statement/expression/addititveExpression";
import AssignmentExpression
  from "../components/parser/statement/expression/assignmentExpression";
import EqualityExpression
  from "../components/parser/statement/expression/equalityExpression";
import IdentifierExpression
  from "../components/parser/statement/expression/identifierExpression";
import BooleanLiteral
  from "../components/parser/statement/expression/literals/booleanLiteral";
import NullLiteral
  from "../components/parser/statement/expression/literals/nullLiteral";
import NumericLiteral
  from "../components/parser/statement/expression/literals/numericLiteral";
import StringLiteral
  from "../components/parser/statement/expression/literals/stringLiteral";
import LogicalANDExpression
  from "../components/parser/statement/expression/logicalANDExpression";
import LogicalORExpression
  from "../components/parser/statement/expression/logicalORExpression";
import MultiplicativeExpression
  from "../components/parser/statement/expression/multiplicativeExpression";
import ParanthesizedExpression
  from "../components/parser/statement/expression/paranthesizedExpression";
import PrimaryExpression
  from "../components/parser/statement/expression/primaryExpression";
import RelationalExpression
  from "../components/parser/statement/expression/relationalExpression";
import ExpressionStatement
  from "../components/parser/statement/expressionStatement";
import IfStatement from "../components/parser/statement/ifStatement";
import InitStatement from "../components/parser/statement/initStatement";
import PrintStatement from "../components/parser/statement/printStatement";
import VariableStatement
  from "../components/parser/statement/variableStatement";
import WhileStatement from "../components/parser/statement/whileStatement";
import StatementList from "../components/parser/statementList";
import TokenExecutor from "../components/parser/tokenExecutor";
import TokenizerImpl from "../components/tokenizer";
import { Tokenizer } from "../components/tokenizer/types";
import { SPEC } from "../constants/mithalaMatrixSpec";



  declare class MithalaMatrixModule {
    private static _tokenizer?;
    private static _initStatement?;
    private static _parser?;
    private static _program?;
    private static _statementList?;
    private static _tokenExecutor?;
    private static _expresionStatement?;
    private static _printStatement?;
    private static _emptyStatement?;
    private static _blockStatement?;
    private static _additiveExpression?;
    private static _multiplicativeExpression?;
    private static _primaryExpression?;
    private static _paranthesizedExpression?;
    private static _numericLiteral?;
    private static _stringLiteral?;
    private static _idetifierExpression?;
    private static _variableStatement?;
    private static _ifStatement?;
    private static _assignmentExpression?;
    private static _booleanLiteral?;
    private static _nullLiteral?;
    private static _equalityExpression?;
    private static _logicalANDExpression?;
    private static _logicalORExpression?;
    private static _relationalExpression?;
    private static _breakStatement?;
    private static _continueStatement?;
    private static _whileStatement?;

//   static getTokenizer() {
//     if (!this._tokenizer) this._tokenizer = new TokenizerImpl(SPEC);

//     return this._tokenizer;
//   }

//   static getTokenExecutor() {
//     if (!this._tokenExecutor)
//       this._tokenExecutor = new TokenExecutor(this.getTokenizer());

//     return this._tokenExecutor;
//   }

//   static getStatementList() {
//     if (!this._statementList)
//       this._statementList = new StatementList(this.getTokenExecutor());

//     return this._statementList;
//   }

//   static getInitStatement() {
//     if (!this._initStatement)
//       this._initStatement = new InitStatement(
//         this.getTokenExecutor(),
//         this.getStatementList()
//       );

//     return this._initStatement;
//   }

//   static getPrintStatement() {
//     if (!this._printStatement) {
//       this._printStatement = new PrintStatement(this.getTokenExecutor());
//     }

//     return this._printStatement;
//   }

//   static getIfStatement() {
//     if (!this._ifStatement) {
//       this._ifStatement = new IfStatement(this.getTokenExecutor());
//     }

//     return this._ifStatement;
//   }

//   static getBreakStatement() {
//     if (!this._breakStatement) {
//       this._breakStatement = new BreakStatement(this.getTokenExecutor());
//     }

//     return this._breakStatement;
//   }

//   static getContinueStatement() {
//     if(!this._continueStatement){
//       this._continueStatement = new ContinueStatement(this.getTokenExecutor());
//     }

//     return this._continueStatement;
//   }

//   static getWhileStatement() {
//     if (!this._whileStatement) {
//       this._whileStatement = new WhileStatement(this.getTokenExecutor());
//     }

//     return this._whileStatement;
//   }

//   static getExpressionStatement() {
//     if (!this._expresionStatement) {
//       this._expresionStatement = new ExpressionStatement(
//         this.getTokenExecutor()
//       );
//     }

//     return this._expresionStatement;
//   }

//   static getEmptyStatement() {
//     if (!this._emptyStatement) {
//       this._emptyStatement = new EmptyStatement(this.getTokenExecutor());
//     }

//     return this._emptyStatement;
//   }

//   static getBlockStatement() {
//     if (!this._blockStatement) {
//       this._blockStatement = new BlockStatement(
//         this.getTokenExecutor(),
//         this.getStatementList()
//       );
//     }

//     return this._blockStatement;
//   }

//   static getVariableStatement() {
//     if (!this._variableStatement)
//       this._variableStatement = new VariableStatement(
//         this.getTokenExecutor(),
//         this.getNullLiteral()
//       );

//     return this._variableStatement;
//   }

//   static getAdditiveExpression() {
//     if (!this._additiveExpression) {
//       this._additiveExpression = new AdditiveExpression(
//         this.getTokenExecutor()
//       );
//     }

//     return this._additiveExpression;
//   }

//   static getMultiplicativeExpression() {
//     if (!this._multiplicativeExpression) {
//       this._multiplicativeExpression = new MultiplicativeExpression(
//         this.getTokenExecutor()
//       );
//     }

//     return this._multiplicativeExpression;
//   }

//   static getPrimaryExpression() {
//     if (!this._primaryExpression) {
//       this._primaryExpression = new PrimaryExpression(this.getTokenExecutor());
//     }

//     return this._primaryExpression;
//   }

//   static getParanthesizedExpression() {
//     if (!this._paranthesizedExpression) {
//       this._paranthesizedExpression = new ParanthesizedExpression(
//         this.getTokenExecutor()
//       );
//     }

//     return this._paranthesizedExpression;
//   }

//   static getIndentifierExpression() {
//     if (!this._idetifierExpression)
//       this._idetifierExpression = new IdentifierExpression(
//         this.getTokenExecutor()
//       );

//     return this._idetifierExpression;
//   }

//   static getEqualityExpression() {
//     if (!this._equalityExpression)
//       this._equalityExpression = new EqualityExpression(
//         this.getTokenExecutor()
//       );

//     return this._equalityExpression;
//   }

//   static getLogicalANDExpression() {
//     if (!this._logicalANDExpression)
//       this._logicalANDExpression = new LogicalANDExpression(
//         this.getTokenExecutor()
//       );

//     return this._logicalANDExpression;
//   }

//   static getLogicalORExpression() {
//     if (!this._logicalORExpression)
//       this._logicalORExpression = new LogicalORExpression(
//         this.getTokenExecutor()
//       );

//     return this._logicalORExpression;
//   }

//   static getRelationalExpression() {
//     if (!this._relationalExpression)
//       this._relationalExpression = new RelationalExpression(
//         this.getTokenExecutor()
//       );

//     return this._relationalExpression;
//   }

//   static getAssignmentExpression() {
//     if (!this._assignmentExpression)
//       this._assignmentExpression = new AssignmentExpression(
//         this.getTokenExecutor()
//       );

//     return this._assignmentExpression;
//   }

//   static getNumericLiteral() {
//     if (!this._numericLiteral) {
//       this._numericLiteral = new NumericLiteral(this.getTokenExecutor());
//     }

//     return this._numericLiteral;
//   }

//   static getStringLiteral() {
//     if (!this._stringLiteral) {
//       this._stringLiteral = new StringLiteral(this.getTokenExecutor());
//     }
//     return this._stringLiteral;
//   }

//   static getBooleanLiteral() {
//     if (!this._booleanLiteral) {
//       this._booleanLiteral = new BooleanLiteral(this.getTokenExecutor());
//     }

//     return this._booleanLiteral;
//   }

//   static getNullLiteral() {
//     if (!this._nullLiteral) {
//       this._nullLiteral = new NullLiteral(this.getTokenExecutor());
//     }

//     return this._nullLiteral;
//   }

//   static getProgram() {
//     if (!this._program) this._program = new Program(this.getStatementList());

//     return this._program;
//   }

//   static getParser() {
//     if (!this._parser)
//       this._parser = new Parser(
//         this.getTokenizer(),
//         this.getProgram(),
//         this.getTokenExecutor()
//       );

//     return this._parser;
//   }
// }


static getTokenizer(): Tokenizer;
static getTokenExecutor(): TokenExecutor;
static getStatementList(): StatementList;
static getInitStatement(): InitStatement;
static getPrintStatement(): PrintStatement;
static getIfStatement(): IfStatement;
static getBreakStatement(): BreakStatement;
static getContinueStatement(): ContinueStatement;
static getWhileStatement(): WhileStatement;
static getExpressionStatement(): ExpressionStatement;
static getEmptyStatement(): EmptyStatement;
static getBlockStatement(): BlockStatement;
static getVariableStatement(): VariableStatement;
static getAdditiveExpression(): AdditiveExpression;
static getMultiplicativeExpression(): MultiplicativeExpression;
static getPrimaryExpression(): PrimaryExpression;
static getParanthesizedExpression(): ParanthesizedExpression;
static getIndentifierExpression(): IdentifierExpression;
static getEqualityExpression(): EqualityExpression;
static getLogicalANDExpression(): LogicalANDExpression;
static getLogicalORExpression(): LogicalORExpression;
static getRelationalExpression(): RelationalExpression;
static getAssignmentExpression(): AssignmentExpression;
static getNumericLiteral(): NumericLiteral;
static getStringLiteral(): StringLiteral;
static getBooleanLiteral(): BooleanLiteral;
static getNullLiteral(): NullLiteral;
static getProgram(): Program;
static getParser(): Parser;
}

export { MithalaMatrixModule as default };











