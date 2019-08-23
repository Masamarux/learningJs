const escola = "Cod3r";

console.log(escola.charAt(4));//vai retornar o 4 caractere da string dentro da constante escola R
console.log(escola.charAt(5));//vai retornar vazio, indicando que não tem caractere na quinta posição, javascript n mostra erro como outras linguagens
console.log(escola.charCodeAt(3));//o número do caractere na tabela Unicode, no caso 51 o "3"
console.log(escola.indexOf('C'));// informa o indice que o caractere informado se encontra, caso não existe será retornado -1

console.log(escola.substring(1));// começa a retornar valores da string no indice informado
console.log(escola.substring(0, 3));//começa do indice inicial e vai até o ultimo informado

console.log("Escola ". concat(escola).concat("!"));//contatenar strings, dá pra concatenar com +
console.log(escola.replace(3, "e"));//troca o vaalor 3 por e

console.log('Ana, Maria, Pedro'.split(','));//quebrou a string e gera um array baseado no que eu quero que separe cada objeto de um array
