let num1 = 1;
let num2 = 2;

num1++;//posfixada //adiciona um valor a variável
console.log(num1);
--num1;//operaçao prefixada, tem uma prioridade diferente da posfixada
console.log(num1);

console.log(++num1 === num2--);//só após a comparação q é retirado um valor do num2
console.log(num1 === num2);

//fazum incremento dentro de uma comparação não é legal
//coloque fora para deixar seu código mais legível