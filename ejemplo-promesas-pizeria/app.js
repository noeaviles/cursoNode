const estatusPedido = () => {
    return Math.random() < 0.8;
};

const miPedidoPizza = new Promise ( (resolve,reject) => {
    setTimeout ( () =>{
        if (estatusPedido) {
            resolve("Pedido exitoso, tu pizza esta en camino =)")
        }else{
            reject("Ocurrio un error =(, intenta de nuevo...")
        }
    },3000);
});


const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = ( mensajeDeRechazo ) => {
    console.log(mensajeDeRechazo);
};

//miPedidoPizza.then(manejarPedido,rechazarPedido);

miPedidoPizza
    .then(manejarPedido)
    .catch(rechazarPedido);


    /*
miPedidoPizza
    .then( (mensajeConfirmacion) => {
        console.log(mensajeConfirmacion)
    })
    .catch ( (mensajeError) =>{
        console.log(mensajeError)
    });
*/