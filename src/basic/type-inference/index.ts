let userName = "John Doe"; //let userName: string
userName = 2020; //Type 'number' is not assignable to type 'string'.ts(2322)

//type => let awesomeList: (string | number | boolean)[]
const awesomeGuy: Array<number | string | boolean> = ["John", 25, "developer", true];

class Car {}

class Suv extends Car {}

class Sedan extends Car {}

class Hatch extends Car {}

class HotHatch extends Hatch {}

const cars = [new HotHatch(), new Sedan(), new Suv(), new Hatch()];
//const cars: (Hatch | Sedan | Suv)[]


const cars: Car[] = [new HotHatch(), new Sedan(), new Suv(), new Hatch()];