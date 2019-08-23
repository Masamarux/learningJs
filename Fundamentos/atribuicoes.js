const a = {name: 'Teste'};
console.log(a);

//atribuição por referência
const b = a;// a constante b não pega o valor da constante a, ela aponta para o mesmo endereço da memoria da constante a
console.log(b);
b.name = 'Opa';
console.log(a);
console.log(b);

let c = 3;
let d = c;
d++;
console.log(d);//4
console.log(c);//3
//tipos primitivos de variaveis só fazem a cópia do valor diferente quando feito com variaveis q tenha objetos

//objetos e funções usam referencia de memória enquanto dados normal não