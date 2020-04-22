const fs = require('fs');

fs.readdir('newDirectory','utf8',(error,files) =>{
  if (error) {
    console.log('no se puedo leer el contenido',error)
    return
  }
  console.log('este es el contenido de la carpeta \n',files)
})

function readDirPromificada(pathToReaddir){
  return new Promise((resolve,reject) => {
    fs.readdir(pathToReaddir,'utf8',(error)=>{
      if (error) {
        reject(error)
        return
      }
    })
  })
}

async function mainFile(){
  const directoryRead = await readDirPromificada('newDirectory')
  return directoryRead
}
mainFile()
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error('ERROR:',error))