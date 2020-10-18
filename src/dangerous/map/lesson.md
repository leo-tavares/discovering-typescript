Você realmente está usando map do maneira correta?Hoje vou escrever sobre um "code smell" que aconteceu comigo e acontece até hoje com alguns dev's.



Vejo muita gente falando maravilhas do método map e no geral é verdade, com uma unica exceção, ele pode gerar mutation de objetos principalmente objetos aninhados.Fiz um exemplo muito básico mas, é suficiente para demonstrar o problema.



No trecho onde fiz a "mutation acidental" alguns podem até argumentar "é só vc desestruturar que tudo que vai dar certo!". Em parte em concordo mas, e se o objeto tiver mais níveis?. O fato é que o problema persiste, nós continuamos com acesso a referência do objeto original e isso não é pratica recomendável.



Como podemos resolver esse problema? Eu recomendo vc utilizar a lib RamdaJs. Eu sou apaixonado pelo forma como essa lib resolve esse e diversos outros problemas que muitas vezes passam despercebidos.



o método "updateCarYear" faz um "map" e quando(when) a propriedade id(propEq) for igual ao id informado, faça uma overriding no prop year com o valor informado. Já o curry é uma técnica que permite que uma função de "n" parâmetros posso ser chamada em uma cadeia de funções em que recebem apenas um parâmetro cada.



#nodejs #typescirpt #javascript #deno #keeplearning #tips