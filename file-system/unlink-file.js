const fs = require('fs')

fs.unlink('write.txt',(error)=>{
  if (error) {
    console.error('el archivo no se puedo eliminar',error)
    return
  }
  console.log('el archivo se a eliminado')
})