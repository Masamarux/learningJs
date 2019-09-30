//usando função arrow
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
//caso nota seja verdadeiro, ele irá retornar aprovado, caso contrário, reprovado

console.log(resultado(7.1));
console.log(resultado(6.7));