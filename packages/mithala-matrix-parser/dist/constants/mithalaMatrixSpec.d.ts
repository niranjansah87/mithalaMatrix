declare const TokenTypes:{
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

  AKSHAR: "NALLA",

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

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
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

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bramro\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bnaramro\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

declare const SPEC: ({
  regex: RegExp;
  tokenType: null;
} | {
  regex: RegExp;
  tokenType: string;
})[];
declare type Spec = typeof SPEC;

export { SPEC, Spec, TokenTypes };
