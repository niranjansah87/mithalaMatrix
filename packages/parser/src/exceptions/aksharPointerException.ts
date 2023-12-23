export default class AksharPointerException extends Error {
  constructor(errorMessage: string) {
    const errorName = "AkasharPointerException";
    errorMessage = errorName + ": " + errorMessage;
    super(errorMessage);
    this.name = errorName;
    this.message = errorMessage;
  }
}
