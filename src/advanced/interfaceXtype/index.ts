interface Employee {
  id: string;
  name: string;
}

interface Developer extends Employee {
  buildAwesomeProducts: "always" | "sometimes";
}

interface Developer {
  likeCoffe: boolean; //true
}

let dev: Developer = {
  id: "29dj4nq9833l",
  name: "Léo",
  likeCoffe: true,
  buildAwesomeProducts: "always",
};

type Car = {
  id: string;
  name: string;
  model: string;
};

type HotHatch = Car & {
  isAwesome: boolean;
};

//Duplicate identifier 'HotHatch'.ts(2300)
// type HotHatch = Car & {
//   isAwesome: boolean;
// };

const car: HotHatch = {
  id: "3j9d30a3la",
  name: "golf",
  model: "gti oettinger",
  isAwesome: true,
};
