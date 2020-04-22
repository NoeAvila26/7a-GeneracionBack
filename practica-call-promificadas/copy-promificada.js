const fs = require('fs')
const pathToCopy = "/home/noela/Documentos/Bootcamp/7a-GeneracionBack/practica-call-promificadas/write.txt"
const pathToDestiny = "/home/noela/Documentos/Bootcamp/7a-GeneracionBack/practica-call-promificadas/write2.txt"

function copyFilePromificada(pathToCopy,fileDestiny) {
  return new Promise((resolve, reject) => {
    fs.copyFile(pathToCopy,fileDestiny,'utf8',(error) => {
      if (error) {
        reject(error)
        return
      }
      resolve(`${pathToCopy} copiado exitosamente`)
    })
  })
}

async function mainFile() {
  const copyFile = await copyFilePromificada(pathToCopy,pathToDestiny)
  return copyFile
}
mainFile()
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error('ERROR:',error))