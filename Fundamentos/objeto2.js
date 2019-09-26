console.log(typeof Object);
console.log(typeof new Object);//o objeto foi instanciado e vira um objeto

const Cliente = function () {};
console.log(typeof Cliente);
console.log(typeof new Cliente);//object

class Produto {};
console.log(typeof Produto);
console.log(typeof new Produto());
//sempre que instanciado algo, vira um objeto