🕙Datas!

Hoje eu vou comentar como que eu faço para manipular datas em projetos javascript.

Na maioria das vezes é recomendável utilizar uma lib que te ajude nessa tarefa. Eu recomendo a date-fns, essa lib é no mínimo incrível. Com ele podemos facilmente comparar, formatar, modificar e usar internacionalização de datas.

No exemplo temos algumas operações básicas com essa lib.

Repare que se quisermos usar um texto customizado é muito interessante usarmos aspas simples em volta do texto, vejo o exemplo do tomorrow.

Observe também que o locale "gera" um impacto no formato de saída. A função formatDistance foi invocada duas vezes porem com o locale diferente resultando em uma formatação compatível com o valor informado.

👉 Existem diversas outras combinações que são possíveis de serem feitas com essa lib. Para conhecer melhor o poder do date-fns leia a documentação, faça exemplos e compartilha com pessoas

📓 Padrões disponíveis para formatação https://date-fns.org/v2.16.1/docs/format

📓 doc completa https://date-fns.org/v2.16.1/docs/

#javascript #nodejs #reactjs #keeplearning #tips
