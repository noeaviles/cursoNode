const http = require("http");
const cursos = require('./cursos');

const servidor = http.createServer( (req,res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);
    }
    res.statusCode = 501;
    return res.end("El recurso solicitado no existe...");
});

const manejarSolicitudGET = (req,res) => {
    const path = req.url;
    if (path === '/') {
        
        return res.end('Bienvenido a mi primer servidor y API creados con Node.js');
    }else if (path === '/cursos') {
        
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }
    res.statusCode = 404;
    res.end("El recurso solicitado no existe...")
}

const manejarSolicitudPOST = (req,res) => {
    const path = req.url;
    if (path === '/cursos/programacion'){
        let cuerpo = '';

        req.on('data',contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo = JSON.parse(cuerpo);
            console.log( typeof cuerpo);
            console.log(cuerpo.titulo);
            res.end("El servidor recibio una solicitud POST para /cursos/programacion");
        })  
        
    }
}

const PORT = 5000;
servidor.listen(PORT,() => {
    console.log(`El servidor esta escuchando el puerto ${PORT}`);
})

