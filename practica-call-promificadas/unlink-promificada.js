const fs = require('fs')

fs.unlink('write.txt',(error)=>{
  if (error) {
    console.error('el archivo no se puedo eliminar',error)
    return
  }
  console.log('el archivo se a eliminado')
})

async function unlinkPromificada(pathToUnlink) {
  return new Promise((reject,resolve) => {
    if (error) {
      reject(error)
      return
    }
    resolve(`${pathToUnlink} borrado exitosamente`)
  })
}

async function mainFile() {
  const fileUnlink = await unlinkPromificada('write.txt')
  return fileUnlink
}
mainFile() 
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error('ERROR:',error))

