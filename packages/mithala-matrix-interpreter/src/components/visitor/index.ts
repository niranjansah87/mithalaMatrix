import { ASTNode } from "mithala-matrix-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
