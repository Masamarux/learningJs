console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola';
console.log(obj1);//{ nome: 'Bola' }

//this torna coisas vísiveis dentro de functions 
function Obj(nome) {
    this.nome = nome;
    this.exec = function(){
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
//a notação ponto serve para acessar objetos e outros atributos dentro de funções