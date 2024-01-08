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

// src/components/tokenizer/index.ts
var tokenizer_exports = {};
__export(tokenizer_exports, {
  default: () => TokenizerImpl
});

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
    throw new SyntaxError(`K gardai xau k tmi??...Unexpected token: "${string[0]}"`);
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
module.exports = __toCommonJS(tokenizer_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});