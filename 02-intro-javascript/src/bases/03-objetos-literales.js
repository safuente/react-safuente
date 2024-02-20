const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 555321321,
        lat: 14.3232,
        lng: 34.923
    }
};

console.log(persona)

// copia de la referencia de memoria NO HACER JAMAS
//const persona2 = persona;
//persona2.nombre = 'Peter'
//console.log(persona2)
//console.log(persona)

// forma correcta de copiar un objeto y no la referencia
const persona2 = {...persona};
persona2.nombre = 'Peter'
console.log(persona2);
console.log(persona)
