//const arreglo = new Array(100);

const arreglo = [1, 2, 3, 4];
// push no utilizar porque modifica el objeto
// arreglo.push(1);
// arreglo.push(2);
//let arreglo2 = arreglo;
//arreglo2.push(5)
//console.log(arreglo);
//console.log(arreglo2);

let arreglo2 = [...arreglo, 5]
console.log(arreglo2);
console.log(arreglo);

// los arreglos tienen un map en su prototype y espera una función
const arreglo3 = arreglo2.map(function(numero) { 
    // esto es un callback
    return numero * 2
});
// el método map genera un nuevo arreglo
console.log(arreglo3)