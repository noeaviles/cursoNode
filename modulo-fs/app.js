const fs = require('fs');

/*fs.readFile('index.html','utf-8',(err,contenido) =>{
  if(err){
    throw(err);
  }else{
    console.log(contenido)
  }
})*/

/*
fs.rename('index.html','main.html', (err) =>{
  if(err) {
    throw err;
  }
  console.log("Se cambio el nombre exitosamente...")
})*/

/*fs.appendFile('index.html','<p>Hola</p>', (err) =>{
  if (err) {
    throw err;
  }
  console.log("Archivo modificado exitosamente...")
})*/

//Remplazar todo el contenido del archivo
/*
fs.writeFile('index.html','contenido nuevo',(err) =>{
  if (err) {
    throw err;
  }
  console.log("Contenido remplazado exitosamente")
});*/

////Eliminar un archivo
fs.unlink('prueba.html',(err) => {
    if (err){
        throw err
    }
    console.log("Archivo eliminado");
});

