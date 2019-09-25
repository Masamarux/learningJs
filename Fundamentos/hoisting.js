//na prática ocorreu o seguinte
//var a
console.log("a = ", a);
//então o javascript atribuiu a variável
//a = 2
var a = 2;//var faz o içamento, ela sempre declara a variável no top do código
console.log("a = ", a);
//dentro da função também ocorre o içamento, o hoisting
//essa estratégia não serve para nada, só para deixar o código mais confuso

console.log("a = ", b);
let b = 2;
console.log("a = ", b);
//let não faz o hoisting, dá erro