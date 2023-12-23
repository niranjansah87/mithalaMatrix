import Visitor from ".";
import { ASTNode } from "Mithala-Matrix-parser";

export default class StringLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
