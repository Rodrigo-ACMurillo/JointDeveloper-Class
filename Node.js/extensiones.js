var fs = require('fs');
var directorio = process.argv[2];
var extension = '.'+process.argv[3];

// Solución Rodrigo
fs.readdir(directorio, function(err, list) {
    list.forEach(function(data) {
      if(data.search(extension)>0) {
        console.log(data)
      }
    })
});

/*
  // Solución Oficial
  var fs = require('fs');
  var directorio = process.argv[2];
  var extension = process.argv[3];

  fs.readdir(directorio, function(err, list) {
    list.forEach(function(data) {

    })
  });
*/
