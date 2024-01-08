// export default class InvalidStateException extends Error {
//   constructor(errorMessage: string) {
//     super(errorMessage);
//     this.name = "InvalidStateException";
//     this.message = errorMessage;
//   }
// }
declare class InvalidStateException extends Error {
  constructor(errorMessage: string);
}

export { InvalidStateException as default };