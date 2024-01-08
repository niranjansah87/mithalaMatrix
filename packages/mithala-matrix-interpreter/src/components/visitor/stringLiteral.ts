import Visitor from ".";
import { ASTNode } from "mithala-matrix-parser";

export default class StringLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
