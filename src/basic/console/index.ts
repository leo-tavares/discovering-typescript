//simulando uma task
const task = (ms: number) => {
  const current = Date.now();
  const limit = current + ms;
  while (Date.now() < limit) {}
};

console.time("timer");
task(500);

for (let index = 0; index < 5; index++) {
  task(100);
  console.timeLog("timer");
}
task(1000);
//Timer 'nonexistent timer' does not exists
console.timeLog("nonexistent timer");

console.timeEnd("timer");
