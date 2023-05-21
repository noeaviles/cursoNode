const os = require('os')
//Modulo console

    //Metodos utiles:
    //console.log("Hola Mundo");
    //console.warn("Ocurrio un error...")
    //console.error(new Error('¡Ocurrio un error!') )
    //console.assert()
    //console.table()
    
//MODULO PROCESS
    //console.log(process);
    //console.log(process.env);
    //console.log(process.argv)
    //console.log(process.memoryUsage())
//MODULO OS
  //console.log( os.type())
  //console.log( os.homedir())
  //console.log( os.uptime())
  //console.log( os.userInfo())

  //MODULO TIMERS
    /*
    Funciones:
      setTimeout()
      setImmediate()
      setInterval()
    */
   /*
   function mostrarTema(tema) {
      console.log(`Estoy aprendiendo ${tema}`)
   }

   setTimeout(mostrarTema, 5000, `NodeJS`);

   function sumar (a,b) {
      console.log(a + b);
   }
  
   setTimeout(sumar,2000,5,3);

   ////////////////setImmediate()/////////////////////
*/
   /*function handleMensaje (mensaje) {
    return console.log(`mensaje: ${mensaje}`)
   }

   console.log("Antes de seImmediate()");
   setImmediate(handleMensaje,'Hola buen día');
   console.log("Despues de seImmediate()");*/

   //////////////////setInterval()//////////////////////////

   function mostrasFruta( fruta ) {
      console.log(`Mi fruta favorita: ${fruta}`)
   }

   setInterval(mostrasFruta,1500,'Manzana');

   //////////////////////////////////////////////////////////////
   //MODULO FS

   