let valor // não inicializa
console.log(valor);//undefined - ela foi declarada mas não inicializada
//console.log(valor2);//its not defined

valor = null;//não tem valor nem endereço de memória, mas se tornou uma variável definida(declarada)
console.log(valor);
//console.log(valor.toString());//n é possível ler nada de um nulo

const produto = {};
console.log(produto.preco);//undefined pq o preco não está definido dentro do obj produto
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined;//evitar atribuir undefined, n faz sentido definir um atributo com undefined
console.log(!!produto.preco);
//delete produto.preco para excluir o valor
console.log(produto);

produto.preco = null; //sem preço, 0 poderia dar algum problema num negócio já que 0 pode ser um valor válido para compra
console.log(!!produto.preco);//falso, então o produto n entraria na lista
console.log(produto);