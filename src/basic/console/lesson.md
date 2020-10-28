Tenho certeza que você conheçe o console.log mas, saibam que existam diversos outros métodos que podem ser
extremamente uteis durante o desenvolvimento.

No exemplo temos uma função chamada task que simula uma tarefa, nesse caso é meramente um delay. Para medir o desempenho estou usando o time, timeLog e timeEnd.

Observe no exemplo que todos possuem o mesmo label, isso é necessário para termos a mesma referência.

console.time -> Inicia o timer 
console.timeLog -> faz um log parcial do timer especificado pelo label
console.timeEnd -> Interrompe o timer que havia iniciado

Em todos em casos devemos usar o mesmo label, caso contrario receberemos um log de erro.