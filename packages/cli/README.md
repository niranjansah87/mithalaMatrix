<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/niranjansah87/mithalaMatrix/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/niranjansah87/mithalaMatrix.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/niranjansah87/mithalaMatrix/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/niranjansah87/mithalaMatrix.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/niranjansah87/mithalaMatrix/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/niranjansah87/mithalaMatrix/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  <b>Mithala Matrix is a funny programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file</h4><br/>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Mithala Matrix PlayGround</a></h4>

```
namaste
  dekhau "Hello bhai";
dhanayabad

```

<h4 align="left">Run</h4>

```
bhailang test.bhai
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
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>akshar. ramro and naramro</code> are the boolean values.</p>

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
  dekhau 5, 'ok', akshar , ramro , naramro;
dhanayabad
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports simple if else construct , <code>yadi</code> block will execute if condition is <code>ramro</code> and <code>natra</code> block will execute if condition is <code>naramro</code>.</p>

```

namaste
  mannus a = 10;
  yadi (a < 25) {
   dekhau "a is less than 25";
  } natra {
   dekhau "a is greater than or equal to 25";
  }
dhanayabad
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jaba samma</code> blocks are executed as long as a specified condition evaluates to ramro. If the condition becomes <code>naramro</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>rukha</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.</p>


```

namaste
  mannus a = 0;
  jaba samma (a < 10) {
   a += 1;
   yadi (a == 5) {
    dekhau "andar se dekhau ", a;
    agla dekh bhai;
   }
   yadi (a == 6) {
    rukha;
   }
   dekhau a;
  }
  dekhau "done";
dhanayabad
```



