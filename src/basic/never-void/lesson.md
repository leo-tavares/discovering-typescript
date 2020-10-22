Hoje vou falar sobre os tipos never e void. Acredito que muito já conheçam o type void mas, e o never? já ouviram falar?

O void todos devem conhecer, geralmente é utilizado em funções que não tem retorno. Um exemplo é o lendário "void main()" da linguagem C (bateu uma nostalgia de programar um uControlador hahah). Vejam a função "greet". Mesmo se não declararmos o void o typescript usaria a inferência para resolver.Percebam que após a execução retornamos para o local onde foi invocada.

E o never? O type never transmite a ideia de um ponto aonde nunca vai retornar, exemplo uma função que lança uma exceção (na imagem é a "throwTerribleError").

Reparem que na função printSum eu não retorno nenhum valor mas, por inferência o typescript sabe que a função retorna void. Por isso ele está lançando o erro "A function returning 'never' cannot have a reachable end point."
