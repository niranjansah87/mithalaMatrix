var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/constants/constants.ts
var constants_exports = {};
__export(constants_exports, {
  NodeType: () => NodeType
});
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
module.exports = __toCommonJS(constants_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NodeType
});