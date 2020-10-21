// Estou forçando um erro - NÃO FAÇA ISSO EM UM PROJETO REAL!

/**
 * Na prática o type-checker fica desabilitado para esta variável
 * Note que não temos qualquer error do ts-sever
 */
let anything: any = "Bananas";
anything.methodOne().methodTwo();
anything = null;
anything = new XMLHttpRequest(); //axios is better
anything.foo().bar().baz();
/**
 * Hum...
 * Property 'methodOne' does not exist on type 'unknown'.ts(2339)
 * Property 'propertyA' does not exist on type 'unknown'.ts(2339)
 */
let unknownValue: unknown = {};
unknownValue.methodOne();
unknownValue = true;
unknownValue = null;
unknownValue.propertyA = "";

let num: number = anything;
//Type 'unknown' is not assignable to type 'number'.ts(2322)
num = unknownValue;

/**
 * Se verificarmos o tipo nós conseguiremos fazer a tipagem correta!
 */
if (typeof unknownValue === "number") {
  num = unknownValue;
}
