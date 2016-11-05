var fs      = require('fs');
var fichero = process.argv[2];
var saltos  = -1;
/*
  Manera síncrona
    var contents = fs.readFileSync(process.argv[2]);
    var lines = contents.toString().split('\n').length - 1;
*/

// Manera asíncrona Rodrigo
fs.readFile(fichero, function(err, elementos) {
  if (err) {
    console.log("Error: " + err);
  } else {
    elementos = elementos.toString().split('\n');
    elementos.forEach(function(dato){
        saltos += 1;
    });
    console.log(saltos);
  }
});

/*
  // Manera asíncrona Solucionario
  var fs = require('fs')
  var file = process.argv[2]

  fs.readFile(file, function (err, contents) {
   if (err) {
     return console.log(err)
   }
   // fs.readFile(file, 'utf8', callback) también se puede utilizar
   var lines = contents.toString().split('\n').length - 1
   console.log(lines)
  });
*/
