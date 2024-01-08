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

// src/constants/bhaiLangSpec.ts
var mithalaMatrixSpec_exports = {};
__export(mithalaMatrixSpec_exports, {
  SPEC: () => SPEC,
  TokenTypes: () => TokenTypes
});

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


module.exports = __toCommonJS(mithalaMatrixSpec_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SPEC,
  TokenTypes
});