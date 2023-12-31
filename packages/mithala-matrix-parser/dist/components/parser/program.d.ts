// import { NodeType } from "../../constants/constants";

// import StatementList from "./statementList";
// import { ASTNode } from "./types/nodeTypes";

// export default class Program {
//   private _statementList: StatementList;

//   constructor(statementList: StatementList) {
//     this._statementList = statementList;
//   }

//   getProgram(): ASTNode {
//     return {
//       type: NodeType.Program,
//       body: this._statementList.getInitialStatementList(),
//     };
//   }
// }
import StatementList from './statementList';
import { ASTNode } from './types/nodeTypes';
import './tokenExecutor';
import '../tokenizer/types';

declare class Program {
    private _statementList;
    constructor(statementList: StatementList);
    getProgram(): ASTNode;
}

export { Program as default };