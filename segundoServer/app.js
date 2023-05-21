const http = require('http');

const server = http.createServer( (req,res) => {
    console.log('==> req (solicitud)');
    console.log(req.url);
    console.log(req.method)
    console.log('==> res');
    console.log(res.statusCode)
    res.setHeader('content-type','application/json');
    console.log(res.getHeaders());
    res.end('Hola Mundo!');
})

const PORT = 5000;
server.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})