console.log('01', '1' == 1);//comparando só o valor = TRUE
console.log('02', '1' ===1);//3 = faz o teste se são ESTRITAMENTE iguais = FALSE
console.log('03', '3' != 3);//FALSE
console.log('04', '3' !== 3);//TRUE, pq os valores são estritamente diferentes

console.log('05', '3' < 2);//FALSE
console.log('06', '3' > 2);//TRUE
console.log('07', '3' <= 2);//FALSE
console.log('08', '3' >= 2);//TRUE

const d1 = new Date(0);
const d2 = new Date(0);
console.log('Teste data',d1, d1.getTime());//1970-01-01T00:00:00.000Z 0
console.log('09', d1 === d2);//FALSE
console.log('10', d1 == d2);//FALSE
console.log('11', d1.getTime() === d2.getTime());//TRUE

console.log('12', undefined == null);//TRUE
console.log('13', undefined === null);//FALSE

//Quando algo é estritamente, o valor e o tipo devem ser iguais, o outro modo, com dois = só verificao valor