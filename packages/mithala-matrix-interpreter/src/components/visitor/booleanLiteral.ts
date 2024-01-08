import Visitor from ".";
import { ASTNode } from "mithala-matrix-parser";

export default class BooleanLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
