function ordenarProducto (producto) {
  return new Promise( (resolve,reject) => {
    console.log(`Ordenando: ${producto}`);
    setTimeout( () => {
      if (producto === "teclado"){
        resolve(` El producto  ${producto} si tiene existencia`);
      }else {
        reject('Este producto no se encuentra disponible actualmente');
      }

    },2000);
  } )
}

function procesarPedido(respuesta) { 
  return new Promise( (resolve) => {
    console.log('Procesando respuesta...')
    console.log(`Existe el producto en almacen:${respuesta}`);
    setTimeout( () => {
      resolve('Gracias por su compra, disfrute su producto.')
    },4000 )
  })
}


async function realizarPedido (producto) {
    try {
      const respuesta = await ordenarProducto(producto);
      const respuestaProcesada = await procesarPedido(respuesta);
      console.log(respuestaProcesada);

    } catch (err) { 
      console.log(err)
    }
}

realizarPedido("teclado");