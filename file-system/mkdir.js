const fs = require('fs');

fs.mkdir('newDirectory',(error) =>{
  if (error){
    console.log('no se pudo crear la carpeta',error)
    return
  }
  console.log('la carpeta se a creado')
})