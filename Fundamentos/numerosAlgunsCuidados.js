console.log(7/0);//javascript diz que é infinito
console.log("10"/2); ///javscript consegue ler a string como 10(aconteceu algum erro na ide por estar tentando dividir string por um número)
console.log('3'+2);//32, ele concatena em vez de somar
console.log('3'-2);//- n existe no mundo da concatenação então ele faz uma operação matematica
console.log("10,2"/2);///Not a Number
console.log(0.1+0.7);//a operação é imprecisa com números flutuantes, isso acontece na maioria das linguagens
//console.log(10.toString());// n funciona quando um número é literal
console.log((10.345).toFixed(2));//"arredonda"