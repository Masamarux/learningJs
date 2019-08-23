let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo);//! é a negação
console.log(!!isAtivo);//!! nega duas vezes, ou seja, volta ao normal, true
console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');//com espaço em branco já funciona o true
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos... ');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || ' '));// || é ou, ou seja, se um deles for verdadeiro tentão será informado true
console.log(('' || null || 0 || 'unico verdadeiro'));// informa o unico real
console.log(('' || 'não é o unico verdadeiro' || null || 'nha' ));// e primeiro verdadeiro

let nome = '';
console.log(nome || 'Desconhecido');
nome = 'Marcelo';
console.log(nome || 'Desconhecido');