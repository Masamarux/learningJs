var numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero);
    //let respeita o conceito de blocos, caso não exista uma variavel dentro dele ai sim ela ira buscar fora
}
console.log('fora = ', numero);
//var tem escopo global e escopo de função
//let tem escopo global, de bloco e de função