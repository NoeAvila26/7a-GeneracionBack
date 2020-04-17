const fs = require('fs')
const newFolder = "newDirectory"

fs.readdir(newFolder, 'utf8', (error,files) => {
  if(error){
    console.log('no se puedo leer el archivo')
    return
  }
    console.log(files)
    
    files.forEach((file) => {
      console.log(file)
      const newPath = `${newFolder}/${file}`
      console.log(newPath)
      fs.unlink(newPath,(error) => { 
        if (error) {
          console.error('el archivo no se puedo eliminar',error)
          return
        }
        console.log('el archivo se a eliminado')
      })
    })
    fs.rmdir(newFolder,(error) =>{
      if(error){
        console.log('la carpeta no se pudo eliminar',error)
        return
      }
      console.log('la carpeta se elimino con exito')
    })
})



