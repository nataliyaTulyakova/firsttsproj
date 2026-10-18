let example1: string = "Hello World!";
console.log(example1);
let example2: number = 42;
console.log(example2);
// Type 'number' is not assignable to type 'string'.
let example3: boolean = true;
console.log(example3);
// Type 'boolean' is not assignable to type 'string'.
let example4: Symbol = Symbol();
console.log(example4);
// Type 'symbol' is not assignable to type 'string'.
let example5: bigint = 123n;
console.log(example5);
// Type 'bigint' is not assignable to type 'string'.

const concatTwoStrings = (a:string, b:string) => {
// Parameter 'b' implicitly has an 'any' type.
// Parameter 'a' implicitly has an 'any' type.
  return [a, b].join(" ");
};
console.log(concatTwoStrings("Hello,","World!"));

const add = (a: boolean, b: boolean):number => {
  return Number(a) + Number(b);
// Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};
console.log (add(true, false));
const add2 = (a: number, b: number):number => {
  return a + b;
// Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};
console.log (add2(1, 2));
