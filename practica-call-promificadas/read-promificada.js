const fs = require('fs')
const pathToRead = "/home/noela/Documentos/Bootcamp/7a-GeneracionBack/practica-call-promificadas/write.txt"


function readFilePromificada(pathToRead) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToRead,'utf8', (error,content)=>{
      if(error){
        reject(error)
        return
      }
      resolve(`${pathToRead} leido exitosamente su contenido es: \n ${content}`)
    })
  })
}

// readFilePromificada(pathToRead)
//   .then((contentFile) => {
//     console.log('contentFile:',contentFile)
//   })
//   .catch(error => console.error('ERROR:',error))


async function mainFile() {
  const readingFile = await readFilePromificada(pathToRead)
  return readingFile
}
mainFile()
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error('ERROR:',error))
