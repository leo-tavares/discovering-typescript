//Qual a diferença de "==" para "==="??

console.log(2020 == "2020"); //true

console.log(2020 === "2020"); //false

console.log(2020 == "2020T"); //false -> Number("2020T") === NaN

//casos especiais
console.log(-0 === +0); //true?? What?!?!

console.log(Object.is(-0, +0)); //false :-)

const isNotANumber = Number("Is not a number");

console.log(isNotANumber === NaN); //false? Whaaat?!

console.log(Object.is(isNotANumber, NaN)); //true :-)
