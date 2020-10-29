import {
  addDays,
  addMonths,
  format,
  formatDistance,
} from "https://deno.land/x/date_fns@v2.15.0/index.js";
import { enUS, ptBR } from "https://deno.land/x/date_fns@v2.15.0/locale/index.js";


const date = format(new Date(2020, 9, 29), "dd/MM/yyyy", { locale: ptBR });
console.log(date); //"29/10/2020"

const today = new Date();
const tomorrow = addDays(today, 1);
console.log(format(tomorrow, "'tomorrow is ' dd/MM", { locale: ptBR }));

const distanceInDays = formatDistance(addDays(today, 15), today, {
  locale: ptBR,
});
console.log(distanceInDays); //15 dias

const distanceInMonth = formatDistance(addMonths(today, 2), today, {
  locale: enUS,
});

console.log(distanceInMonth); //2 months
