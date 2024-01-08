var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/components/parser/statement/continueStatement.ts
var statement_exports = {};
__export(statement_exports, {
  default: () => Statement
});

// src/constants/bhaiLangSpec.ts
var NodeType = {
    AdditiveExpression: "AdditiveExpression",
    MultiplicativeExpression: "MultiplicativeExpression",
    PrimaryExpression: "PrimaryExpression",
    ParanthesizedExpression: "ParanthesizedExpression",
    IdentifierExpression: "IdentifierExpression",
    AssignmentExpression: "AssignmentExpression",
    BinaryExpression: "BinaryExpression",
    LogicalExpression: "LogicalExpression",
    LogicalANDExpression: "LogicalANDExpression",
    LogicalORExpression: "LogicalORExpression",
    RelationalExpression: "RelationalExpression",
    EqualityExpression: "EqualityExpression",
    BlockStatement: "BlockStatement",
    EmptyStatement: "EmptyStatement",
    ExpressionStatement: "ExpressionStatement",
    InitStatement: "InitStatement",
    PrintStatement: "PrintStatement",
    IfStatement: "IfStatement",
    WhileStatement: "WhileStatement",
    BreakStatement: "BreakStatement",
    ContinueStatement: "ContinueStatement",
    VariableStatement: "VariableStatement",
    BooleanLiteral: "BooleanLiteral",
    NumericLiteral: "NumericLiteral",
    StringLiteral: "StringLiteral",
    NullLiteral: "NullLiteral",
    VariableDeclaration: "VariableDeclaration",
    Program: "Program"
  };
  var Parser = class {
    constructor(tokenizer, program, tokenExecutor) {
      this._tokenizer = tokenizer;
      this._program = program;
      this._tokenExecutor = tokenExecutor;
      this._stringToTokenize = "";
    }
    parse(stringToTokenize) {
      this._stringToTokenize = stringToTokenize;
      this._tokenizer.initTokenizer(this._stringToTokenize);
      this._tokenExecutor.setLookahead(this._tokenizer.getNextToken());
      return this._program.getProgram();
    }
  };
  // src/components/parser/program.ts
  // var Program = class {
  //   constructor(statementList) {
  //     this._statementList = statementList;
  //   }
  //   getProgram() {
  //     return {
  //       type: NodeType.Program,
  //       body: this._statementList.getInitialStatementList()
  //     };
  //   }
  // };
  
  // src/constants/mithalaMatrixSpec.ts
  var TokenTypes = {
    NULL_TYPE: null,
    NAMASTE: "namaste",
    DHANAYABAD: "dhanayabad",
    DEKHAU: "dekhau",
    MANNUS: "mannus",
    YADI: "yadi",
    NATRA: "natra",
    ANAYATHA_YADI: "anayatha yadi",
    JABA_SAMMA: "jaba samma",
    RUKHA: "rukha",
    ARKO_HERA: "arko hera",
    AKSHAR: "akshar",
    SEMI_COLON_TYPE: ";",
    OPEN_CURLY_BRACE_TYPE: "{",
    CLOSED_CURLY_BRACE_TYPE: "}",
    OPEN_PARENTHESIS_TYPE: "(",
    CLOSED_PARENTHESIS_TYPE: ")",
    COMMA_TYPE: ",",
    NUMBER_TYPE: "NUMBER",
    IDENTIFIER_TYPE: "IDENTIFIER",
    SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",
    COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",
    ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",
    MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",
    RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",
    EQUALITY_OPERATOR: "EQUALITY_OPERATOR",
    STRING_TYPE: "STRING",
    BOOLEAN_TYPE: "BOOLEAN",
    LOGICAL_AND: "LOGICAL_AND",
    LOGICAL_OR: "LOGICAL_OR"
  };
  var SPEC = [
    { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },
    { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },
    { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },
    { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
    { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
    { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
    { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
    { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
    { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },
    { regex: /^\bnamaste\b/, tokenType: TokenTypes.NAMASTE },
    { regex: /^\bdhanayabad\b/, tokenType: TokenTypes.DHANAYABAD },
    { regex: /^\bdekhau\b/, tokenType: TokenTypes.DEKHAU },
    { regex: /^\bmannus\b/, tokenType: TokenTypes.MANNUS },
    { regex: /^\byadi\b/, tokenType: TokenTypes.YADI },
    { regex: /^\banayatha yadi\b/, tokenType: TokenTypes.ANAYATHA_YADI },
    { regex: /^\bnatra\b/, tokenType: TokenTypes.NATRA },
    { regex: /^\bakshar\b/, tokenType: TokenTypes.AKSHAR },
    { regex: /^\bjaba samma\b/, tokenType: TokenTypes.JABA_SAMMA },
    { regex: /^\brukha\b/, tokenType: TokenTypes.RUKHA },
    { regex: /^\barko hera\b/, tokenType: TokenTypes.ARKO_HERA },
    { regex: /^-?\d+/, tokenType: TokenTypes.NUMBER_TYPE },
    { regex: /^\bramro\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
    { regex: /^\bnaramro\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
    { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },
    { regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR },
    { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
    { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },
    { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
    { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
    { regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR },
    { regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND },
    { regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR },
    { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
    { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE }
  ];


// src/components/parser/program.ts
var Program = class {
  constructor(statementList) {
    this._statementList = statementList;
  }
  getProgram() {
    return {
      type: NodeType.Program,
      body: this._statementList.getInitialStatementList()
    };
  }
};

// src/components/parser/statement/blockStatement.ts
var BlockStatement = class extends Statement {
  constructor(tokenExecutor, statementList) {
    super(tokenExecutor);
    this._statementList = statementList;
  }
  getStatement() {
    var _a;
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_CURLY_BRACE_TYPE);
    const body = ((_a = this._tokenExecutor.getLookahead()) == null ? void 0 : _a.type) === TokenTypes.CLOSED_CURLY_BRACE_TYPE ? [] : this._statementList.getStatementList(TokenTypes.CLOSED_CURLY_BRACE_TYPE);
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_CURLY_BRACE_TYPE);
    this._tokenExecutor.eatOptionalSemiColonToken();
    return {
      type: NodeType.BlockStatement,
      body
    };
  }
};

// src/components/parser/statement/breakStatement.ts
var BreakStatement = class extends Statement {
  getStatement() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.RUKHA);
    return {
      type: NodeType.BreakStatement
    };
  }
};

// src/components/parser/statement/emptyStatement.ts
var EmptyStatement = class extends Statement {
  getStatement() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
    return {
      type: NodeType.EmptyStatement
    };
  }
};

// src/components/parser/statement/expression/index.ts
var Expression = class {
    constructor(tokenExecutor) {
      this._tokenExecutor = tokenExecutor;
    }
    static getExpressionImpl(expressionType) {
      switch (expressionType) {
        case NodeType.AdditiveExpression:
          return MithalaMatrixModule.getAdditiveExpression();
        case NodeType.MultiplicativeExpression:
          return MithalaMatrixModule.getMultiplicativeExpression();
        case NodeType.PrimaryExpression:
          return MithalaMatrixModule.getPrimaryExpression();
        case NodeType.ParanthesizedExpression:
          return MithalaMatrixModule.getParanthesizedExpression();
        case NodeType.AssignmentExpression:
          return MithalaMatrixModule.getAssignmentExpression();
        case NodeType.EqualityExpression:
          return MithalaMatrixModule.getEqualityExpression();
        case NodeType.LogicalANDExpression:
          return MithalaMatrixModule.getLogicalANDExpression();
        case NodeType.LogicalORExpression:
          return MithalaMatrixModule.getLogicalORExpression();
        case NodeType.RelationalExpression:
          return MithalaMatrixModule.getRelationalExpression();
        default:
          return MithalaMatrixModule.getIndentifierExpression();
      }
    }
    getBinaryExpression(downstreamExpressionType, operatorToken) {
      return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
    }
    getLogicalExpression(downstreamExpressionType, operatorToken) {
      return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
    }
    _getExpression(downstreamExpressionType, operatorToken, expressionType) {
      var _a;
      let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();
      while (((_a = this._tokenExecutor.getLookahead()) == null ? void 0 : _a.type) === operatorToken) {
        const operator = this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
        const right = Expression.getExpressionImpl(downstreamExpressionType).getExpression();
        left = {
          type: expressionType,
          operator: operator.value,
          left,
          right
        };
      }
      return left;
    }
  };
  

// src/components/parser/statement/expression/addititveExpression.ts
var AdditiveExpression = class extends Expression {
  getExpression() {
    return this.getBinaryExpression(NodeType.MultiplicativeExpression, TokenTypes.ADDITIVE_OPERATOR_TYPE);
  }
};

// src/components/parser/statement/expression/assignmentExpression.ts
var AssignmentExpression = class extends Expression {
  constructor() {
    super(...arguments);
    this._logicalORExpression = Expression.getExpressionImpl(NodeType.LogicalORExpression);
  }
  getExpression() {
    var _a;
    const left = this._logicalORExpression.getExpression();
    if (!this._isAssignmentOperator((_a = this._tokenExecutor.getLookahead()) == null ? void 0 : _a.type)) {
      return left;
    }
    return {
      type: NodeType.AssignmentExpression,
      operator: this._getAssignmentOperator().value,
      left: this._checkValidAssignmentTarget(left),
      right: this.getExpression()
    };
  }
  _isAssignmentOperator(tokenType) {
    return tokenType && (tokenType === TokenTypes.SIMPLE_ASSIGN_TYPE || tokenType === TokenTypes.COMPLEX_ASSIGN_TYPE);
  }
  _getAssignmentOperator() {
    const lookahead = this._tokenExecutor.getLookahead();
    if (!lookahead || lookahead.type === TokenTypes.SIMPLE_ASSIGN_TYPE)
      return this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SIMPLE_ASSIGN_TYPE);
    return this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMPLEX_ASSIGN_TYPE);
  }
  _checkValidAssignmentTarget(node) {
    if (node.type === NodeType.IdentifierExpression)
      return node;
    throw new SyntaxError("Invalid left hand side in assignment expression");
  }
};

// src/components/parser/statement/expression/equalityExpression.ts
var EqualityExpression = class extends Expression {
  getExpression() {
    return this.getBinaryExpression(NodeType.RelationalExpression, TokenTypes.EQUALITY_OPERATOR);
  }
};

// src/components/parser/statement/expression/identifierExpression.ts
var IdentifierExpression = class extends Expression {
  getExpression() {
    const name = this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.IDENTIFIER_TYPE).value;
    return {
      type: NodeType.IdentifierExpression,
      name
    };
  }
};

// src/exceptions/unsupportedTypeException.ts
var UnsupportedTypeException = class extends Error {
  constructor(errorMessage) {
    super(errorMessage);
    this.name = "UnsupportedTypeException";
    this.message = errorMessage;
  }
};

// src/components/parser/statement/expression/literals/index.ts
var Literal = class {
  constructor(tokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }
  static getLiteralImpl(tokenType) {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return MithalaMatrixModule.getNumericLiteral();
      case TokenTypes.BOOLEAN_TYPE:
        return MithalaMatrixModule.getBooleanLiteral();
      case TokenTypes.STRING_TYPE:
        return MithalaMatrixModule.getStringLiteral();
      case TokenTypes.AKSHAR:
        return MithalaMatrixModule.getNullLiteral();
      default:
        throw new UnsupportedTypeException(`Token type not supproted for literal: ${tokenType}`);
    }
  }
};

// src/components/parser/statement/expression/literals/booleanLiteral.ts
var BooleanLiteral = class extends Literal {
  getLiteral() {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BOOLEAN_TYPE);
    return {
      type: NodeType.BooleanLiteral,
      value: token.value
    };
  }
};

// src/components/parser/statement/expression/literals/nullLiteral.ts
var NullLiteral = class extends Literal {
  getLiteral() {
    return {
      type: NodeType.NullLiteral,
      value: "nalla"
    };
  }
};

// src/components/parser/statement/expression/literals/numericLiteral.ts
var NumericLiteral = class extends Literal {
  getLiteral() {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.NUMBER_TYPE);
    return {
      type: NodeType.NumericLiteral,
      value: Number(token.value)
    };
  }
};

// src/components/parser/statement/expression/literals/stringLiteral.ts
var StringLiteral = class extends Literal {
  getLiteral() {
    const token = this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.STRING_TYPE);
    return {
      type: NodeType.StringLiteral,
      value: token.value.slice(1, -1)
    };
  }
};

// src/components/parser/statement/expression/logicalANDExpression.ts
var LogicalANDExpression = class extends Expression {
  getExpression() {
    return this.getLogicalExpression(NodeType.EqualityExpression, TokenTypes.LOGICAL_AND);
  }
};

// src/components/parser/statement/expression/logicalORExpression.ts
var LogicalORExpression = class extends Expression {
  getExpression() {
    return this.getLogicalExpression(NodeType.LogicalANDExpression, TokenTypes.LOGICAL_OR);
  }
};

// src/components/parser/statement/expression/multiplicativeExpression.ts
var MultiplicativeExpression = class extends Expression {
  getExpression() {
    return this.getBinaryExpression(NodeType.PrimaryExpression, TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE);
  }
};

// src/components/parser/statement/expression/paranthesizedExpression.ts
var ParanthesizedExpression = class extends Expression {
  getExpression() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
    const expression = Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression();
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);
    return expression;
  }
};

// src/components/parser/statement/expression/primaryExpression.ts
var PrimaryExpression = class extends Expression {
  getExpression() {
    const token = this._tokenExecutor.getLookahead();
    switch (token == null ? void 0 : token.type) {
      case TokenTypes.OPEN_PARENTHESIS_TYPE:
        return Expression.getExpressionImpl(NodeType.ParanthesizedExpression).getExpression();
      case TokenTypes.STRING_TYPE:
      case TokenTypes.NUMBER_TYPE:
      case TokenTypes.BOOLEAN_TYPE:
        return Literal.getLiteralImpl(token.type).getLiteral();
      case TokenTypes.AKSHAR:
        return this._getNallaLiteral();
      default:
        return this._getLeftHandSideExpression();
    }
  }
  _getNallaLiteral() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.AKSHAR);
    return Literal.getLiteralImpl(TokenTypes.AKSHAR).getLiteral();
  }
  _getLeftHandSideExpression() {
    return Expression.getExpressionImpl(NodeType.IdentifierExpression).getExpression();
  }
};

// src/components/parser/statement/expression/relationalExpression.ts
var RelationalExpression = class extends Expression {
  getExpression() {
    return this.getBinaryExpression(NodeType.AdditiveExpression, TokenTypes.RELATIONAL_OPERATOR);
  }
};

// src/components/parser/statement/expressionStatement.ts
var ExpressionStatement = class extends Statement {
  getStatement() {
    const expression = Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression();
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
    return {
      type: NodeType.ExpressionStatement,
      expression
    };
  }
};

// src/components/parser/statement/ifStatement.ts
var HANDLED_LOOP_TOKEN_TYPES = [TokenTypes.NATRA, TokenTypes.NATRA];
var IfStatement = class extends Statement {
  constructor(tokenExecutor) {
    super(tokenExecutor);
  }
  getConditionalStatement(tokenType) {
    this._tokenExecutor.eatTokenAndForwardLookahead(tokenType);
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
    const test = Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression();
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);
    if (this._tokenExecutor.getLookahead() == null) {
      throw new SyntaxError(`Unexpected end of "${tokenType}" statement`);
    }
    const consequent = Statement.getStatementImpl(this._tokenExecutor.getLookahead()).getStatement();
    return {
      type: NodeType.IfStatement,
      test,
      consequent
    };
  }
  getStatement() {
    const ifStatement = this.getConditionalStatement(TokenTypes.YADI);
    const alternates = [];
    for (let lookahead = this._tokenExecutor.getLookahead(); lookahead !== null && HANDLED_LOOP_TOKEN_TYPES.includes(lookahead.type); lookahead = this._tokenExecutor.getLookahead()) {
      if (lookahead.type === TokenTypes.NATRA) {
        alternates.push(this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type) && Statement.getStatementImpl(this._tokenExecutor.getLookahead()).getStatement());
        break;
      } else if (lookahead.type === TokenTypes.NATRA) {
        alternates.push(this.getConditionalStatement(TokenTypes.NATRA));
      }
    }
    return __spreadProps(__spreadValues({}, ifStatement), {
      alternates
    });
  }
};

// src/components/parser/statement/initStatement.ts
var InitStatement = class extends Statement {
  constructor(tokenExecutor, statementList) {
    super(tokenExecutor);
    this._statementList = statementList;
  }
  getStatement() {
    var _a;
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.HI_BHAI_TYPE);
    this._tokenExecutor.eatOptionalSemiColonToken();
    const body = ((_a = this._tokenExecutor.getLookahead()) == null ? void 0 : _a.type) !== TokenTypes.BYE_BHAI_TYPE ? this._statementList.getStatementList(TokenTypes.BYE_BHAI_TYPE) : [];
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BYE_BHAI_TYPE);
    this._tokenExecutor.eatOptionalSemiColonToken();
    return {
      type: NodeType.InitStatement,
      body
    };
  }
};

// src/components/parser/statement/printStatement.ts
var PrintStatement = class extends Statement {
  getStatement() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.DEKHAU);
    const expressions = this._getExpressionList();
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
    return {
      type: NodeType.PrintStatement,
      expressions
    };
  }
  _getExpressionList() {
    var _a;
    const expressions = [];
    do {
      expressions.push(this._getExpression());
    } while (((_a = this._tokenExecutor.getLookahead()) == null ? void 0 : _a.type) === TokenTypes.COMMA_TYPE && this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE));
    return expressions;
  }
  _getExpression() {
    return Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression();
  }
};

// src/components/parser/statement/variableStatement.ts
var VariableStatement = class extends Statement {
  constructor(tokenExecutor, nullLiteral) {
    super(tokenExecutor);
    this._nullLiteral = nullLiteral;
  }
  getStatement() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.MANNUS);
    const declarations = this._getVariableDeclarationList();
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
    return {
      type: NodeType.VariableStatement,
      declarations
    };
  }
  _getVariableDeclarationList() {
    var _a;
    const declarations = [];
    do {
      declarations.push(this._getVariableDeclaration());
    } while (((_a = this._tokenExecutor.getLookahead()) == null ? void 0 : _a.type) === TokenTypes.COMMA_TYPE && this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE));
    return declarations;
  }
  _getVariableDeclaration() {
    var _a, _b;
    const id = Expression.getExpressionImpl(NodeType.IdentifierExpression).getExpression();
    const init = ((_a = this._tokenExecutor.getLookahead()) == null ? void 0 : _a.type) !== TokenTypes.SEMI_COLON_TYPE && ((_b = this._tokenExecutor.getLookahead()) == null ? void 0 : _b.type) !== TokenTypes.COMMA_TYPE ? this._getVariableInitializer() : this._nullLiteral.getLiteral();
    return {
      type: NodeType.VariableDeclaration,
      id,
      init
    };
  }
  _getVariableInitializer() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SIMPLE_ASSIGN_TYPE);
    return Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression();
  }
};

// src/components/parser/statement/whileStatement.ts
var WhileStatement = class extends Statement {
  getStatement() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.JABA_SAMMA);
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
    const test = Expression.getExpressionImpl(NodeType.AssignmentExpression).getExpression();
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);
    if (this._tokenExecutor.getLookahead() == null) {
      throw new SyntaxError(`Unexpected end of "JABA SAMMA" statement`);
    }
    const body = Statement.getStatementImpl(this._tokenExecutor.getLookahead()).getStatement();
    return {
      type: NodeType.WhileStatement,
      test,
      body
    };
  }
};

// src/components/parser/statementList.ts
var StatementList = class {
  constructor(tokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }
  getInitialStatementList() {
    for (let lookahead = this._tokenExecutor.getLookahead(); lookahead !== null && lookahead.type !== TokenTypes.HI_BHAI_TYPE; lookahead = this._tokenExecutor.getLookahead()) {
      this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type);
    }
    return MithalaMatrixModule.getInitStatement().getStatement();
  }
  getStatementList(stopLookaheadType) {
    const statementlist = [];
    for (let lookahead = this._tokenExecutor.getLookahead(); lookahead !== null && lookahead.type !== stopLookaheadType; lookahead = this._tokenExecutor.getLookahead()) {
      statementlist.push(Statement.getStatementImpl(lookahead).getStatement());
    }
    return statementlist;
  }
};

// src/components/parser/tokenExecutor.ts
var TokenExecutor = class {
  constructor(tokenizer) {
    this._lookahead = null;
    this._tokenizer = tokenizer;
  }
  eatTokenAndForwardLookahead(tokenType) {
    const token = this._lookahead;
    if (token == null) {
      throw new SyntaxError(`Unexpected end of input, expected : "${tokenType}"`);
    }
    if (token.type !== tokenType) {
      throw new SyntaxError(`K gardai xau k tmi??...Unexpected token: "${token.value}", expected : "${tokenType}"`);
    }
    this.setLookahead(this._tokenizer.getNextToken());
    return token;
  }
  eatOptionalSemiColonToken() {
    var _a;
    if (((_a = this.getLookahead()) == null ? void 0 : _a.type) == TokenTypes.SEMI_COLON_TYPE)
      this.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
  }
  getLookahead() {
    return this._lookahead;
  }
  setLookahead(lookahead) {
    this._lookahead = lookahead;
  }
};

// src/exceptions/invalidStateException.ts
var InvalidStateException = class extends Error {
  constructor(errorMessage) {
    super(errorMessage);
    this.name = "InvalidStateException";
    this.message = errorMessage;
  }
};

// src/components/tokenizer/index.ts
var TokenizerImpl = class {
  constructor(spec) {
    this._string = void 0;
    this._spec = spec;
    this._cursor = 0;
  }
  initTokenizer(stringToTokenize) {
    this._string = stringToTokenize;
    this._cursor = 0;
  }
  isEOF() {
    if (!this._string)
      return true;
    return this._cursor === this._string.length;
  }
  hasMoreTokens() {
    if (!this._string)
      return false;
    return this._cursor < this._string.length;
  }
  getNextToken() {
    if (!this._string)
      throw new InvalidStateException("Tokenizer is not initialized with string. Please call initTokenizer method first.");
    if (!this.hasMoreTokens()) {
      return null;
    }
    const string = this._string.slice(this._cursor);
    for (const { regex, tokenType } of this._spec) {
      const tokenValue = this._matched(regex, string);
      if (tokenValue === null) {
        continue;
      }
      if (tokenType === null) {
        return this.getNextToken();
      }
      return {
        type: tokenType,
        value: tokenValue
      };
    }
    throw new SyntaxError(`k gardai xau k tmi??...Unexpected token: "${string[0]}"`);
  }
  _matched(regex, string) {
    const matched = regex.exec(string);
    if (matched === null) {
      return null;
    }
    this._cursor += matched[0].length;
    return matched[0];
  }
};

// src/module/MithalaMatrixModule.ts
var MithalaMatrixModule = class {
  static getTokenizer() {
    if (!this._tokenizer)
      this._tokenizer = new TokenizerImpl(SPEC);
    return this._tokenizer;
  }
  static getTokenExecutor() {
    if (!this._tokenExecutor)
      this._tokenExecutor = new TokenExecutor(this.getTokenizer());
    return this._tokenExecutor;
  }
  static getStatementList() {
    if (!this._statementList)
      this._statementList = new StatementList(this.getTokenExecutor());
    return this._statementList;
  }
  static getInitStatement() {
    if (!this._initStatement)
      this._initStatement = new InitStatement(this.getTokenExecutor(), this.getStatementList());
    return this._initStatement;
  }
  static getPrintStatement() {
    if (!this._printStatement) {
      this._printStatement = new PrintStatement(this.getTokenExecutor());
    }
    return this._printStatement;
  }
  static getIfStatement() {
    if (!this._ifStatement) {
      this._ifStatement = new IfStatement(this.getTokenExecutor());
    }
    return this._ifStatement;
  }
  static getBreakStatement() {
    if (!this._breakStatement) {
      this._breakStatement = new BreakStatement(this.getTokenExecutor());
    }
    return this._breakStatement;
  }
  static getContinueStatement() {
    if (!this._continueStatement) {
      this._continueStatement = new ContinueStatement(this.getTokenExecutor());
    }
    return this._continueStatement;
  }
  static getWhileStatement() {
    if (!this._whileStatement) {
      this._whileStatement = new WhileStatement(this.getTokenExecutor());
    }
    return this._whileStatement;
  }
  static getExpressionStatement() {
    if (!this._expresionStatement) {
      this._expresionStatement = new ExpressionStatement(this.getTokenExecutor());
    }
    return this._expresionStatement;
  }
  static getEmptyStatement() {
    if (!this._emptyStatement) {
      this._emptyStatement = new EmptyStatement(this.getTokenExecutor());
    }
    return this._emptyStatement;
  }
  static getBlockStatement() {
    if (!this._blockStatement) {
      this._blockStatement = new BlockStatement(this.getTokenExecutor(), this.getStatementList());
    }
    return this._blockStatement;
  }
  static getVariableStatement() {
    if (!this._variableStatement)
      this._variableStatement = new VariableStatement(this.getTokenExecutor(), this.getNullLiteral());
    return this._variableStatement;
  }
  static getAdditiveExpression() {
    if (!this._additiveExpression) {
      this._additiveExpression = new AdditiveExpression(this.getTokenExecutor());
    }
    return this._additiveExpression;
  }
  static getMultiplicativeExpression() {
    if (!this._multiplicativeExpression) {
      this._multiplicativeExpression = new MultiplicativeExpression(this.getTokenExecutor());
    }
    return this._multiplicativeExpression;
  }
  static getPrimaryExpression() {
    if (!this._primaryExpression) {
      this._primaryExpression = new PrimaryExpression(this.getTokenExecutor());
    }
    return this._primaryExpression;
  }
  static getParanthesizedExpression() {
    if (!this._paranthesizedExpression) {
      this._paranthesizedExpression = new ParanthesizedExpression(this.getTokenExecutor());
    }
    return this._paranthesizedExpression;
  }
  static getIndentifierExpression() {
    if (!this._idetifierExpression)
      this._idetifierExpression = new IdentifierExpression(this.getTokenExecutor());
    return this._idetifierExpression;
  }
  static getEqualityExpression() {
    if (!this._equalityExpression)
      this._equalityExpression = new EqualityExpression(this.getTokenExecutor());
    return this._equalityExpression;
  }
  static getLogicalANDExpression() {
    if (!this._logicalANDExpression)
      this._logicalANDExpression = new LogicalANDExpression(this.getTokenExecutor());
    return this._logicalANDExpression;
  }
  static getLogicalORExpression() {
    if (!this._logicalORExpression)
      this._logicalORExpression = new LogicalORExpression(this.getTokenExecutor());
    return this._logicalORExpression;
  }
  static getRelationalExpression() {
    if (!this._relationalExpression)
      this._relationalExpression = new RelationalExpression(this.getTokenExecutor());
    return this._relationalExpression;
  }
  static getAssignmentExpression() {
    if (!this._assignmentExpression)
      this._assignmentExpression = new AssignmentExpression(this.getTokenExecutor());
    return this._assignmentExpression;
  }
  static getNumericLiteral() {
    if (!this._numericLiteral) {
      this._numericLiteral = new NumericLiteral(this.getTokenExecutor());
    }
    return this._numericLiteral;
  }
  static getStringLiteral() {
    if (!this._stringLiteral) {
      this._stringLiteral = new StringLiteral(this.getTokenExecutor());
    }
    return this._stringLiteral;
  }
  static getBooleanLiteral() {
    if (!this._booleanLiteral) {
      this._booleanLiteral = new BooleanLiteral(this.getTokenExecutor());
    }
    return this._booleanLiteral;
  }
  static getNullLiteral() {
    if (!this._nullLiteral) {
      this._nullLiteral = new NullLiteral(this.getTokenExecutor());
    }
    return this._nullLiteral;
  }
  static getProgram() {
    if (!this._program)
      this._program = new Program(this.getStatementList());
    return this._program;
  }
  static getParser() {
    if (!this._parser)
      this._parser = new Parser(this.getTokenizer(), this.getProgram(), this.getTokenExecutor());
    return this._parser;
  }
};

// src/components/parser/statement/index.ts
var Statement = class {
  constructor(tokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }
  static getStatementImpl(lookahead) {
    switch (lookahead.type) {
      case TokenTypes.DEKHAU:
        return MithalaMatrixModule.getPrintStatement();
      case TokenTypes.SEMI_COLON_TYPE:
        return MithalaMatrixModule.getEmptyStatement();
      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return MithalaMatrixModule.getBlockStatement();
      case TokenTypes.MANNUS:
        return MithalaMatrixModule.getVariableStatement();
      case TokenTypes.YADI:
        return MithalaMatrixModule.getIfStatement();
      case TokenTypes.JABA_SAMMA:
        return MithalaMatrixModule.getWhileStatement();
      case TokenTypes.RUKHA:
        return MithalaMatrixModule.getBreakStatement();
      case TokenTypes.ARKO_HERA:
        return MithalaMatrixModule.getContinueStatement();
      default:
        return MithalaMatrixModule.getExpressionStatement();
    }
  }
};

// src/components/parser/statement/continueStatement.ts
module.exports = __toCommonJS(statement_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});