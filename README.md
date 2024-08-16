<b><h1 align="center">Mithala Matrix</h1></b>

  

<p align="center">
  This is official repository for Mithala Matrix Developed by Niranjan sah<br><br>
  <b>Mithala Matrix is a fun programming language written in Typescript.It is based on Nepali Language</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g mithalamatrix
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.mm</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Mithala Matrix PlayGround</a></h4>

```
namaste
  dekhau "Hello bhai";
dhanayabad

```

<h4 align="left">Run</h4>

```
<<<<<<< HEAD
mithala matrix test.mm
=======
mithalamatrix.mm
>>>>>>> abfdd610eba9cf952c83b534fc3635350135f6c0
```

<h4 align="left">Output</h4>

```
hello bhai
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>namaste</code> is the entrypoint for the program and all program must end with <code>dhanayabad</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

namaste
// Write code here
dhanayabad

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>mannus</code>.</p>

```

namaste
  mannus a = 10;
  mannus b = "two";
  mannus c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
dhanayabad
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>akshar</code>. <code>ramro</code> and <code>naramro</code> are the boolean values.</p>

```

namaste
  mannus a = 10;
  mannus b = 10 + (15*20);
  mannus c = "two";
  mannus d = 'ok';
  mannus e = akshar;
  mannus f = ramro;
  mannus g = naramro;
dhanayabad
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>dekhau</code> to print anything to console.</p>

```

namaste
  dekhau "Hello World";
  mannus a = 10;
  {
    mannus b = 20;
    dekhau a + b;
  }
  dekhau 5, 'ok', nalla , ramro , naramro;
dhanayabad
```

<h3 align="center">Conditionals</h3>
<p align="center">Mithala Matrix supports if-else-if ladder construct , <code>yadi</code> block will execute if condition is <code>ramro</code>, otherwise one of the subsequently added <code>anayatha yadi</code> blocks will execute if their respective condition is <code>ramro</code>, and the <code>natra </code> block will eventually execute if all of the above conditions are <code>naramro</code>

```

namaste
  mannus a = 10;
  yadi (a < 20) {
    dekhau "a is less than 20";
  } anayatha yadi ( a < 25 ) {
    dekhau "a is less than 25";
  } natra {
    dekhau "a is greater than or equal to 25";
  }
dhanayabad
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jaba samma</code> blocks are executed as long as a specified condition evaluates to ramro. If the condition becomes <code>naramro</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>rukha</code> to break the loop and <code className="language-cpp">arko hera</code> to continue within loop.</p>


```

namaste
  mannus a = 0;
  jaba samma (a < 10) {
   a += 1;
   yadi (a == 5) {
    dekhau "vitra bata dekha ", a;
    arko hera;
   }
   yadi (a == 6) {
    rukha;
   }
   dekhau a;
  }
  dekhau "done";
dhanayabad
```

<h2 align="center">Development</h2>
<p align="center">You can explore abstract syntax tree(AST) of mithala matrix <a href="https://bhailang-ast.netlify.app/" target="_blank">here</a>.</p>





<center><h3 align="center">I am still working on it on hold </h3></center>


