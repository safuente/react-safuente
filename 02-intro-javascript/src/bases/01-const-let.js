const nombre = 'Santiago';
const apellido = 'Alvarez';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true) {
    // variable de scope solo existe en este ámbito
    let valorDado = 6;
    console.log(valorDado);
}

console.log(valorDado);