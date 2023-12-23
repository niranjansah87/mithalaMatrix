import Visitor from ".";
import { ASTNode } from "Mithala-Matrix-parser";

export default class NullLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
