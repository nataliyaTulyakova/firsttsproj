// Task 1
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numArr = wrapInArray<number>(42); // Має мати тип number[]
const strArr = wrapInArray<string>("hello"); // Має мати тип string[]
console.log(`Чи масив - ${Array.isArray(numArr)}; чи елементи числа - ${numArr.every(num => typeof num ==="number")}`);
console.log(`Чи масив - ${Array.isArray(strArr)}; чи елементи рядки - ${strArr.every(str => typeof str==="string")}`);

// Task 2
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

console.log(getLength([1, 2, 3])); // Працює
console.log(getLength("TypeScript")); // Працює

//console.log(getLength(123)); // Помилка компіляції: у number немає length
// Тип T обов'язково повинен мати властивість length

//Task 3

function first<T>(coll: Array<T>): T | null {
  return coll[0] ?? null;
}

console.log(first([])); // null
console.log(first<number>([3, 2])); // 3
console.log(first<string>(["code-basics", "hexlet"])); // code-basics

// Task 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Олена" };

console.log(getProperty(user, "name")); // Працює, повертає 'Олена'

//console.log(getProperty(user, "age")); // Помилка компіляції: 'age' не існує в user


