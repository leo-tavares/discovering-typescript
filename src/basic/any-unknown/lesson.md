any e unknown!Sabe a diferença de um para o outro?É sobre eles que vou comentar! Clássificados como basic types, é importante tomar cuidado com sua utilização.

O type any é qualquer coisa, imagine um cenário onde os tipos não estão bem definidos, nesse caso podemos utilizamos o any. Veja o exemplo da variável anything, note que não recebemos qualquer warning ou error do ts-server ao chamarmos métodos que sequer existem ou atribuições de diferentes tipos. Na prática nós dasabilitamos o typeChecker em anything. Objeservem.

"Então o 'unknown' é quase mesma coisa né léo?" Então...
O type unknown permite fazer praticamente tudo o que o any faz com poucas exceções. Uma deles é que o type unknown não permite que nós acessemos propriedades arbitrariamente. veja o exemplo do unknownValue.

Veja que ao atribuir anything em num não há qualquer msg de erro mas, ao tentar fazer o mesmo com unknowValue logo recebmos o alerta do typeChecker. A unica solução é fazermos um type guard. 

Note que no exemplo eu consigo fazer uma série de bizarrices sem receber error.

Resumindo,não gosto destes tipos, evite usar! Essas types são situacionais!Não recomendo o uso indiscriminado, a tipagem estática é nossa amiga e devemos usa-lá.Só os utilize se realmente for necessário.