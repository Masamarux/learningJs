const nome = 'Emma';
const concatenacao = 'Olá' + nome + '!';
const template = `
    Olá
    ${nome}!`
//usando crase ela respeita quebras de linhas, para usar variaveis usamos ${variavel}
//é uma funcionalidade nova do js
console.log(concatenacao, template);

//expressoes
console.log(`1 + 1 = ${1 + 1}`);//${}faz o template interpretar o q está ali dentro
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);