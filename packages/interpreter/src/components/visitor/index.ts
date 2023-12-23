import { ASTNode } from "Mithala-Matrix-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
