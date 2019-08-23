const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));//1.0 é um valor inteiro, se estivesse 1.1 ou mais daria false
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));//arredonda as casas decimais
console.log(media.toString(2));//transforma um número numa base informada, no caso a binária(2[0 e 1])
console.log(typeof media);//number tipo da variavel
console.log(typeof Number);//Number é uma função