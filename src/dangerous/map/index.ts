import { updateCarYear } from "./utils.ts";

type CarYear = {
  from: number;
  to: number;
};

type Car = {
  id: number;
  name: string;
  model: string;
  year: CarYear;
};
type CarsList = Array<Car>;

const originalList: CarsList = [
  {
    id: 1,
    name: "gol",
    model: "gti 2.0 16v",
    year: {
      from: 1988,
      to: 1989,
    },
  },
  {
    id: 2,
    name: "eclipse",
    model: "gst n13",
    year: {
      from: 1998,
      to: 1998,
    },
  },
];

console.log("lista original antes da mutation\n", originalList, "\n");

/**
 * Esse problema ocorre pois a função map mantem a referência de
 * objetos aninhados. Como resolve isso?
 */
const updateYear = (id: number, year: CarYear) => {
  return originalList.map((car) => {
    if (car.id === id) {
      car.year = year; //<- mutation acidental!!!
    }
    return car;
  });
};

const updatedList = updateYear(2, { from: 1995, to: 1995 });

const updatedCarListWithoutTriggerMutation = updateCarYear(
  { from: 1990, to: 1991 },
  2,
  originalList
);

console.log("lista original depois da mutation\n", originalList, "\n");
console.log(
  "Lista atualizada que desencadeu a mutation na propriedade year\n",
  updatedList,
  "\n"
);

//originalList sem sofrer mutation
console.log(
  "Lista atualizada corretamente, sem desencadear mutation\n",
  updatedCarListWithoutTriggerMutation,
  "\n"
);

console.log(
  "lista original depois da primeira mutation e mantendo valor na prop year\n",
  originalList,
  "\n"
);

export type { CarsList, CarYear };
