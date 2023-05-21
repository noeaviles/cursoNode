const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos');

//Router
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion',routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas',routerMatematicas);

//Routing
app.get( '/', (req,res) => {
    res.send("Mi primer Servidor con Express.")
});

app.get( '/api/cursos', (req,res) => {
    res.end(JSON.stringify(infoCursos));
})




// SE LEVANTA SERVIDOR
const PORT = process.env.PORT || 5000;

app.listen( PORT , () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})