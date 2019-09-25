//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);
imprimirSoma(2);//NaN porque o segundo número, o b, se torna undefined
imprimirSoma(2, 7,  4, 5);//usa os dois e o resto ele ignora

//Função com retorno
function soma(a, b=1) {
    return a + b;
}

//soma(10, 2);//não imprime pq ela só retorna o valor
console.log(soma(10, 2));
console.log(soma(2));// o valor de b foi usado pois não foi recebido nenhum valor
