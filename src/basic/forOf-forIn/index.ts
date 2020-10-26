const frutas = ["banana", "abacaxi", "uva"];

for (const fruta of frutas) {
  console.log(fruta); //"banana", "abacaxi", "uva"
}

for (const index in frutas) {
  console.log(`index ${index} => ${frutas[index]}`);
}

const linguagem = "javascript";
for (const letra of linguagem) {
  console.log(letra);
}

const car: { [index: string]: string } = {
  name: "bolt",
  brand: "gm",
  engine: "eletric",
};

for (const property in car) {
  console.log(`${property}: ${car[property]}`);
}
