import Visitor from ".";
import { ASTNode } from "mithala-matrix-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";


export default class PrintStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.expressions)
      throw new InvalidStateException(
        `No expressions to print: ${node.expressions}`
      );

    const value = node.expressions
      .map((expression: ASTNode) => {
        let currentNodeOutput = InterpreterModule.getVisitor(expression.type).visitNode(expression);
        if (currentNodeOutput === true)
          currentNodeOutput = "ramro";
        else if (currentNodeOutput === false)
          currentNodeOutput = "naramro";
        return currentNodeOutput;
      }
      )
      .join(" ");
    console.log(value);
  }
}
