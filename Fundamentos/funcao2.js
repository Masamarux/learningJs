//Armazenando uma função em uma variável

const imprimirSoma = function (a, b){
    console.log(a + b);
}

//imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variável
// a setinha substitui o nome function
const soma = (a, b) =>{
    return a + b;
}

//console.log(soma(2, 3));

//retorno implícito
//quando não tem chaves após a seta, significa que a funçào só tem uma linha
const subtração = (a, b) => a - b;

console.log(subtração(3, 1));

//diminuir ainda mais a sintaxe da arrow function com um só parâmetro
const imprimir2 = a => console.log(a);
imprimir2("Olá");