const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })
}
funcs[2]();//let imprimi 2
funcs[8]();//let imprimi 8
//escopo do bloco do let funciona nesses casos tbm