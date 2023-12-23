import Visitor from ".";
import { ASTNode } from "Mithala-Matrix-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
