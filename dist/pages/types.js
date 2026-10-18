let example1 = "Hello World!";
console.log(example1);
let example2 = 42;
console.log(example2);
// Type 'number' is not assignable to type 'string'.
let example3 = true;
console.log(example3);
// Type 'boolean' is not assignable to type 'string'.
let example4 = Symbol();
console.log(example4);
// Type 'symbol' is not assignable to type 'string'.
let example5 = 123n;
console.log(example5);
// Type 'bigint' is not assignable to type 'string'.
const concatTwoStrings = (a, b) => {
    // Parameter 'b' implicitly has an 'any' type.
    // Parameter 'a' implicitly has an 'any' type.
    return [a, b].join(" ");
};
console.log(concatTwoStrings("Hello,", "World!"));
const add = (a, b) => {
    return Number(a) + Number(b);
    // Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};
console.log(add(true, false));
const add2 = (a, b) => {
    return a + b;
    // Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};
console.log(add2(1, 2));
export {};
//# sourceMappingURL=types.js.map