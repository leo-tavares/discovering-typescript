Você sabe a diferença do loose equality para o strict equality? E o Object.is?
Pelo nome fica bem sugestivo para que eles servem mas, como eles funcionam de verdade?

O loose equality é representado por dois sinais de igualdade ( a == b ). Nessa igual o javascript tenta fazer um coerção e então compara os valores. Observe o exemplo do 2020 == "2020". Para ilustrar a ideia da possibilidade de conversão podemos fazer Number("2020") então teremos um retorno true na comparação.  

Já o strict equality não faz a coerção, ele compara diretamente os valores por isso temos um retorno false da igualdade 2020 == "2020". Em outras palavras se os tipos são diferentes o retorna false.

O Object.is não faz conversão de types e não tem tratamente especias para NaN ou -0 e +0.Observe os exemplos

O ideal é vc sempre preferir o strict equality no lugar do loose equality, por razões de óbvias. O Object.is deve ser utilizado em casos muito especiais


Maiores detalhes podem ser obtidos na documentação => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness