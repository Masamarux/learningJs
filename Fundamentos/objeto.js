const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40;//evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa P',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};
//isso não é a mesma coisa que json
//{ "nome": "Camisa Polo", "preco": 79.90 }// isso seria um json, ele é um formato textual para trocar informações entre sistemas
