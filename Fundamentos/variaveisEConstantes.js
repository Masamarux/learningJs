var a = 3;//evitar uso de variáveis com var
let b = 4;

var a = 30;
b = 40;//isso acontece por algum motivo, colocar let causa erro quando roda

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
//c = 50;
//constante n pode ser reatribuída
console.log(c);