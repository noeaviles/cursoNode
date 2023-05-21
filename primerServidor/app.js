const http = require('http');

const servidor = http.createServer( (req,res) =>{
    res.end('Hola mundo!');
})

const PORT = 5000;

servidor.listen( PORT, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PORT}...`);
})

