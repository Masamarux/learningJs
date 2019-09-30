function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2;
    const comprarTv50 = trab1 && trab2;
    //const comprartv32 = !!(trab1 ^ trab2); //bitwise xor
    const comprarTv32 = trab1 != trab2;
    const manterSaudavel = !comprarSorvete;//operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
    //deveriam se ter valores chaves no objeto acima
    //mas um recurso novo do ECS2015 cria um obj mais inteligente
    //já atribuindo nome das chaves pelo nome da contante
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));