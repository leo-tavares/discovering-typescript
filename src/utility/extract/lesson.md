Hoje vou comentar a respeito do type Extract e entrar um pouco mais em "generics".Na prática o Extract é utilizado para obtermos chaves de dois types que estão presentes em ambos.Veja a assinatura

type Extract<T, U> = T extends U ? T : never;

Se T for um extensão de U retorne T, se não, retorne "never" (never -> é um tipo que nunca deve ocorrer).

Em nosso exemplo utilizamos o "keyof" para termos acesso apenas as chaves do tipo informado, no caso, as chaves do tipo Project e as chaves do tipo BaseProject.

type SharedKeys = Extract<keyof Project, keyof BaseProject>;

agora para termos acesso aos tipos das propriedades de Project

type SharedProjectData = {
    [k in SharedKeys]: Project[k]
}

K será cada uma das keys de SharedKeys e seu tipo será igual a propriedade correspondente em Project[k]. Quando k for "name", Project[k] vai ser uma string e assim será com todas as outras propriedades.

"E o generic, quem é?"Eu gosto de definir generic como um "recurso" para permitir que um componente posso trabalhar com varios tipos ao invés de "marretar" um unico. Repare que nós implicitamente utilizamos generic.

type Extract<T, U> = T extends U ? T : never;

type SharedKeys = Extract<keyof Project, keyof BaseProject>;

Onde T = Project e U = BaseProject
