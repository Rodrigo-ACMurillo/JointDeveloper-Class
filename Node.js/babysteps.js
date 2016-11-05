// Ficheros
var datos = process.argv;
var suma  = 0;

for(var i = 2; i < datos.length; i++) {
    suma += Number(datos[i]);
}

console.log(suma);
