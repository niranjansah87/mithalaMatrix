#! /usr/bin/env node
import interpreter from "bhai-lang-interpreter";
import chalk from "chalk";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

console.info(
  chalk.hex("#83aaff")(`
  _    _    _    _    _    _    _    _    _    _    _    _    _  
 / \  / \  / \  / \  / \  / \  / \  / \  / \  / \  / \  / \  / \ 
( M )( i )( t )( h )( a )( l )( a )( M )( a )( t )( r )( i )( x )
 \_/  \_/  \_/  \_/  \_/  \_/  \_/  \_/  \_/  \_/  \_/  \_/  \_/

https://github.com/niranjansah87/mithalaMatrix
`)
);

const cl = console.log;

console.log = function (...args) {
  const newArgs = args.map((arg) => {
    return `${chalk.hex("#83aaff")(">  ")}${chalk.greenBright(arg)}`;
  });
  cl.apply(console, newArgs);
};

const filePath = yargs(hideBin(process.argv))
  .command(
    "<filepath>",
    "Interpret the contents of the specified file and print it to stdout",
    () => {},
    (argv) => {
      console.info(argv);
    }
  )
  .demandCommand(1).argv._[0];

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    interpreter.interpret(data);
  } catch (ex) {
    if (ex instanceof Error) {
      console.error("\n", chalk.redBright(ex.stack));
    }
  }
});
