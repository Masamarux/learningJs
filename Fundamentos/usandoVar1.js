{
    {
        {
            {
                var sera = 'Será????';
            }
        }
    }
}
//a variavel var "sera" está visível por todo o código, mesmo dentro de um bloco diferente
console.log(sera);

function teste(){
    var local = 123;
}
teste();
//a variavel var só pode ser acessada localmente na function
//console.log(local);
//var tem escopo global, q é visível para todo mundo, ou uma variavel local dentro de uma function, que é visível só dentro dela
