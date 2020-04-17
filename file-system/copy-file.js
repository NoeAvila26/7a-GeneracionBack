const fs = require('fs')

fs.copyFile('write.txt','copia.txt','utf8',(error)=>{
  if (error) {
  console.log('el archivo no se pudo copiar',error)
  return
  }
  console.log('el archivo se copio con exito')
})