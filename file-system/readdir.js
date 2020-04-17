const fs = require('fs');

fs.readdir('newDirectory','utf8',(error,files) =>{
  if (error) {
    console.log('no se puedo leer el contenido',error)
    return
  }
  console.log('este es el contenido de la carpeta \n',files)
})
