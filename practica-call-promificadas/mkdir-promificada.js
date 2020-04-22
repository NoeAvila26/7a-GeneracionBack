const fs = require('fs');
const pathTomkdir = "/home/noela/Documentos/Bootcamp/7a-GeneracionBack/practica-call-promificadas/nueva-carpeta"

function mkdirPromificada(pathTomkdir, data) {
  return new Promise((resolve, reject) => {
    fs.mkdir(pathTomkdir, data, 'utf8', (error) => {
      if (error) {
        reject(error)
        return
      }
      resolve(`${pathTomkdir} directorio creado exitosamente`)
    })
  })
}

async function mainFile() {
  const directoryCreated = await mkdirPromificada(pathTomkdir,'es un directorio')
  return directoryCreated
}
mainFile()
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error('ERROR:',error))