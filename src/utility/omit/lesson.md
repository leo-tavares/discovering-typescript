Hoje vou falar sobre o type Omit do nosso amado typescript.
Ele é um dos tipos utilitários, seu uso tipico é quando precisamos omitir uma ou mais propriedades de um outro type. O type Omit é derivado do type Pick(veja a assinatura na imagem abaixo).

Eu confesso que sempre tive dificuldade em ler essas asinaturas rs, então vou explicar pra vcs.

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

1ª type Omit<T, K extends keyof any> 
 O "T" é um tipo genérico, pode ser qualquer type.
 "K extends keyof any" diz que K é uma chave de qualquer (isso mesmo!).

2ª Pick<T, Exclude<keyof T, K>>
O "T" é o mesmo type da 1ª parte.
"Exclude<keyof T, K>" significa para excluir quaisquer chave k no tipo T.


código no github para vc testar/modificar o projeto.

#deno #nodejs #typescript #tips