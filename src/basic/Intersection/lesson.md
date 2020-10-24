Ontem eu comentei sobre Union e hoje é a vez do Intersection um type que é util quando precisamos fazer combinações de types.Qual é a diferença de Intersection para Union?

Como eu disso ambos tem o mesmo principio que é mesclar componentes mas, cada um faz a sua maneira. A union segue a ideia do XOR enquanto o Intersection segue a ideia do AND.

XOR -> "ou typeA ou typeB" 
AND -> "typeA e typeB"

É válido ressaltar que uma Intersection deve ser usada em types "compostos", veja o typeC, por inferência o typescript o nomeia como "never" (lembre-se!"never" é uma situação que nunca deve ocorrer). No caso o type C teria que ser do tipo string e boolean ao memso tempo. Agora veja o type D temos sucesso na tipagem pois D é "ou typeA ou typeB"

Outro detalha importante é que o Intersection vai fazer um overwrite em propriedades com o mesmo nome então prestem atenção quando forem tipar o projeto.