const fs = require('fs')
const pathToWrite = "/home/noela/Documentos/Bootcamp/7a-GeneracionBack/practica-call-promificadas/write.txt"


function writeFilePromificada(pathToWrite, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathToWrite,data,'utf8', (error) => {
      if (error) {
        reject(error)
        return
      }
      resolve(`${pathToWrite} creado exitosamente`)
    })
  })
}

async function mainFile() {
  const fileCreated = await writeFilePromificada(pathToWrite,'es un archivo')
  return fileCreated
}
mainFile()
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error('ERROR:',error))