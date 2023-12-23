import Visitor from ".";
import { ASTNode } from "Mithala-Matrix-parser";

export default class BooleanLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
