import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">namaste</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">dhanyabad</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

namaste
  // Write code here
dhanyabad
This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">mannus</code>.
      </>
    ),
    code: `namaste
    mannus a = 10 ;
    mannus b = "two" ;
    mannus c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
dhanyabad
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">akshar</code>.{" "}
        <code className="language-cpp">ramro</code> and{" "}
        <code className="language-cpp">naramro</code> are the boolean values.
      </>
    ),
    code: `namaste
    mannus a = 10 ;
    mannus b = 10 + (15*20);
    mannus c = "two" ;
    mannus d = 'ok';
    mannus e = akshar ;
    mannus f = ramro ;
    mannus g = naramro ;
dhanayabad
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">dekhau</code> to print anything to
        console.
      </>
    ),
    code: `namaste
    dekhau "Hello World";
    mannus a = 10;
    {
       mannus b = 20;
       dekhau a + b;
    }
    dekhau 5, 'ok', akshar , ramro , naramro;
dhanayabad
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bhailang supports if-else-if ladder construct , <code className="language-cpp">yadi </code> block will execute if condition is <code className="language-cpp">ramro</code>, otherwise one of the subsequently added <code className="language-cpp">anayatha yadi</code> blocks will execute if their respective condition is <code className="language-cpp">ramro</code>, and the <code className="language-cpp">anayatha yadi</code> block will eventually execute if all of the above conditions are <code className="language-cpp">naramro</code>.
      </>
    ),
    code: `namaste
    mannus a = 10;
    yadi (a < 20) {
      dekhau "a is less than 20";
    } anayatha yadi ( a < 25 ) {
      dekhau "a is less than 25";
    } natra {
      dekhau "a is greater than or equal to 25";
    }
dhanayabad
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">jaba samma</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">ramro</code>. If the condition becomes <code className="language-cpp">naramro</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">pakha</code> to break the loop and <code className="language-cpp">arko hera</code> to continue within loop.
      </>
    ),
    code: `namaste
    mannus a = 0;
    jaba samma (a < 10) {
      a += 1;
      yadi (a == 5) {
        dekhau "andar se dekhau ", a;
        arko hera;
      }
      yadi (a == 6) {
        pakha;
      }
      dekhau a;
    }
    dekhau "done";
dhanayabad
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            MithalaMatrix is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
