const { Router } = require('express');
const express = require('express');
const {programacion} = require('../datos/cursos.js').infoCursos;
const routerProgramacion = express.Router();

//Middleware ==> investigar más
routerProgramacion.use(express.json())

routerProgramacion.get('/',(req,res) => {
    res.end(JSON.stringify(programacion));
})

routerProgramacion.get('/:lenguaje',(req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter( curso => curso.lenguaje === lenguaje );

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    if(req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort( (a,b) => a.vistas - b.vistas)));
    }
    
    res.end(JSON.stringify(resultados))
})

routerProgramacion.get('/:lenguaje/:nivel',(req,res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const  resultados = programacion.filter( curso => curso.lenguaje === lenguaje && curso.nivel === nivel );

    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el ${lenguaje} y nivel ${nivel} indicados`);
    }

    res.end(JSON.stringify(resultados));

})

//METODO POST - permite ingresar nuevos datos
routerProgramacion.post('/',(req,res) => {
    let nuevoCurso = req.body;
    programacion.push(nuevoCurso);
    res.end(JSON.stringify(programacion));
})

//METODO PUT - PERMITE ACTUALIZAR
routerProgramacion.put('/:id',(req,res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex( curso => curso.id == id ); //se coloco == para poder comprar el tipo entero que tenemos en la bd con el tipos string que viene en la solicitud http
    if (indice >= 0) {
        programacion[indice] = cursoActualizado;
    }
    res.end(JSON.stringify(programacion));
})

//METODO PATCH -- sirve para modificar solo algunas propiedades
routerProgramacion.patch('/:id',(req,res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex( curso => curso.id == id );

    if (indice >= 0) {
        const cursoModificar = programacion[indice];
        Object.assign(cursoModificar,infoActualizada); //Funcion Object.assig, permite modificar alguna propiedades del los arreglos.
    }
    res.end(JSON.stringify(programacion));
})


//METODO DELETE - sirve para eliminar elementos
routerProgramacion.delete('/:id',(req,res) => {
    const id = req.params.id;
    const indice = programacion.findIndex( curso => curso.id == id );

    if (indice >=0 ) {
        programacion.splice(indice,1)
    }
    res.end(JSON.stringify(programacion))
})

module.exports = routerProgramacion;