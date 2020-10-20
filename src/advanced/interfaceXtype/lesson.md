Alguns dias atrás um amigo me perguntou qual a diferença da declaração "type" e "interface" no código typescript. É sobre isso que vamos conversar hoje!

Na prática o "type" é um QUASE um aliases para interface. Veja as principais diferenças na imagem abaixo.

- Com "type" não podemos dar um extends como fazemos com a interface. Temos que fazer uma "associação".

- Não podemos adicionar novos campos depois de criada. Observe com ao declararmos novamente a interface Developer adicionamos a propriedade "likeCoffe". Quando tentamos fazer com o "type" recebemos uma menssagem de erro.

"Mas e agora, léo?! Qual eu uso "type" ou "interface"?"

Você pode se beneficiar das duas formas de declaração! O uso de uma não exclui a outra. Entenda... Para declarar um tipo de objeto eu acho mais interessante usar interface, para declar uma "Union" eu prefiro utilizar o type. O ideal é vc conversar com seu time e escolher o "estilo" do vcs. 

Com a prática vc vai saber escolher quando usar um ou outro. 

