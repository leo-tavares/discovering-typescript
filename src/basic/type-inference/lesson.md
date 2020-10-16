Fala ai pessoal td na paz?!

Hoje nós vamos conversar um pouco sobre inferência de tipos, já ouviu sobre? O typescript usa essa "técnica" para prover um tipagem quando não há um notação explicita. É isso que torna o typescript "smart" (...ok, smart não é a melhor palavra rs). Vamos observar alguns exemplos.

Temos a variável userName declarado sem qualquer tipagem e o typescript faz a inferência para string, em seguida ao tentarmos usar um number recebemos o error => " TS2322 [ERROR]: Type 'number' is not assignable to type 'string' ".

O segundo exemplo é o array "awesomeGuy" é um pouco mais complexo pois o typescript vai tentar encontrar o tipo comum entre os elementos. No nosso caso o tipo inferido vai ser do tipo Array<number | string | boolean>.

Nosso ultimo exemplo eu fiz uma brincadeira com herança(quem não souber o que é, pode postar nos comentários ou msg inbox que eu respondo :D).

Observe que todas as classes são especializações da classe Car, no entanto por não serem "estritamente" Car o typescript faz inferência do tipo especializado, Array<Hatch | Sedan | Suv>. Notem que por HotHatch ser um Hatch ele encontrou o tipo comum corretamente, curioso né rsrs?!

Nesse cenário é fortemente recomendado que vc tipe explicitamente nossa lista de carros.

#typescript #tips
