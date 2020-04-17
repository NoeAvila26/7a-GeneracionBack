const fs = require('fs')

// const fileName = 'write.txt'

// fs.appendFile(fileName, '\nA todos los koders','utf8', error =>{
//   if (error) {
//     console.error('error al agregar al archivo', error)
//     return
//   }
//   console.log('texto agregado la archivo')
//   console.log('A todos los koders')
//   fs.readFile(fileName, 'utf8',(error,fileContent) =>{
//     if (error) {
//       console.error('error al leer el archivo')
//       return
//     }
//     console.log('archivo final: \n',fileContent)
//   })
// })

fs.appendFile('write.txt', ' a todos los koders','utf8',(error) =>{
  if (error){
    console.log('no se pudo agregar el archivo')
    return
  }
  console.log('el texto a sido agregado')
})

