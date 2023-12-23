import Visitor from ".";
import { ASTNode } from "mithala-matrix-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
