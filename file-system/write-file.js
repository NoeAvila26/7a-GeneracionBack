const fs = require('fs')

fs.writeFile('write.txt','hola desde node','utf8',(error) => {
  if(error){
    console.log('hubo un error al escribir el archivo')
    return
  } 
  console.log('termine de escribir el archivo')
})

