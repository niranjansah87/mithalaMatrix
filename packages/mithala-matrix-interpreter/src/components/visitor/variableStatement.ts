import Visitor from ".";
import { ASTNode } from "mithala-matrix-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";

export default class VariableStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.declarations)
      throw new InvalidStateException(
        `variable declarations in variable statement is not present: ${node.declarations}`
      );

    node.declarations.forEach((declaration: ASTNode) => { // Explicitly type 'declaration' as ASTNode
      InterpreterModule.getVisitor(declaration.type).visitNode(declaration);
    });
  }
}
