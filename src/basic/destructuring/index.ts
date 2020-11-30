//💡 Desestruturação com arrays 💡
const fruits = ["🍋", "🍇", "🍌", "🍉"];

console.log(fruits); //["🍋", "🍇", "🍌", "🍉"]

/*👉 ignoro o primeiro elemento
  👉 todos os outros valores estão na variável otherFruits*/
const [, grape, ...otherFruits] = fruits;

// grape = "";// Cannot assign to 'grape' because it is a constant

console.log(`Eu gosto de ${grape}`);

console.log(otherFruits); //[ "🍌", "🍉" ]


export {};
