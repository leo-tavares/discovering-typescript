import * as R from "https://x.nest.land/ramda@0.27.0/source/index.js";

import type { CarsList, CarYear } from "./index.ts";


export const updateCarYear = R.curry(
  (year: CarYear, id: number, cars: CarsList) => {
    return R.map(R.when(R.propEq("id", id), R.assoc("year", year)), cars);
  }
);
