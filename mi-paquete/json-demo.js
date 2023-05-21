const curso = require('./curso.json');
console.log(curso.titulo);

let infoCurso = {
    "titulo":"Aprende Node.js",
    "numVistas": 45452,
    "numLikes": 21123,
    "temas":[
      "JavaScript",
      "Node.js"
    ],
    "esPublico":true

};

//propiedad stringify() convierte objeto => cadena de caracteres
//Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof(infoCursoJSON))


//propiedad .parse() convierte Cadena de caracteres => Objeto

    let infoCursoObejto = JSON.parse(infoCursoJSON)
    console.log(infoCursoObejto);
    console.log(typeof(infoCursoObejto));