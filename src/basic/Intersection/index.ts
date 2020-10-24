type People = {
  name: string;
};

type Employee = {
  name: "Donald Knuth";
  role: string;
};
//overwrite da property name
type Intersection = People & Employee;
const intersectionExample: Intersection = {
  //Type '"Ada lovelace"' is not assignable
  // to type '"Donald Knuth"
  name: "Ada lovelace",
  role: "programmer",
};

type A = string;
type B = boolean;
// typeC = never
type C = A & B;
//typeD = string | boolean
type D = A | B;
