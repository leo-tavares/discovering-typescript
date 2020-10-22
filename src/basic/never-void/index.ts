function greet(name: string): void {
  console.log(`Hello ${name}! Would you like an orange juice?`);
}
//por inferência -> const voidValue: void
const voidValue = greet("Jailson");
//log -> undefined
console.log(voidValue);

function throwTerribleError(): never {
  throw new Error("internal sever error!");
}
//A function returning 'never' cannot have a reachable end point.
function printSum(num1: number, num2: number): never {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
