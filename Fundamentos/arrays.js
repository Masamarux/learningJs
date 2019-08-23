const valores = [7.7, 8.9, 6.3, 9.2];//uma variavel genérica
console.log(valores[0], valores[3]);
console.log(valores[4]);// não existe elemento 4 no array, vai retornar undefined

valores[4] = 10;
console.log(valores);
//valores[10] = 14;
//console.log(valores);// ele informa que tem valores vazios antes do elemento 10
console.log(valores.length);

valores.push({id : 3}, false, null, 'teste');// adiciona em ordem os valores no array, o js não se importa com tipos dos elementos num array mas não é uma boa ideia
console.log(valores);

console.log(valores.pop());//vai mostra o ultimo valor do array e ele perde o valor
delete valores[0];
console.log(valores);// ultimo valor foi retirado com o pop e o primeiro com delete

console.log(typeof valores);