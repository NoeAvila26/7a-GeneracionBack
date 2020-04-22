const fs = require('fs')
const pathToAppend = "/home/noela/Documentos/Bootcamp/7a-GeneracionBack/practica-call-promificadas/write.txt"

// fs.appendFile(pathToAppend, '\n A todos los koders','utf8', error =>{
//   if (error) {
//     console.error('error al agregar al archivo', error)
//     return
//   }
//   console.log('texto agregado la archivo')
//   console.log('A todos los koders')
//   fs.readFile(pathToAppend, 'utf8',(error,fileContent) =>{
//     if (error) {
//       console.error('error al leer el archivo')
//       return
//     }
//     console.log('archivo final: \n',fileContent)
//   })
// })

function appendFilePromificada(pathToAppend, data) {
  return new Promise((resolve,reject) => {
    fs.appendFile(pathToAppend,data,'utf8',(error) => {
      if (error) {
        reject(error)
        return
      }
      resolve(`${data} agregado a ${pathToAppend} `)
    })
  })
}

async function mainFile() {
  const fileAppend = await appendFilePromificada(pathToAppend,'\n holis pistolis')
  return fileAppend
}
mainFile()
  .then(result =>{
    console.log(result)
  })
  .catch(error => console.error('ERROR:',error))