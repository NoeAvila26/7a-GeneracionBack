const fs = require('fs')

fs.readFile('write.txt', 'utf8', (error,data) => {
  if(error){
    console.log('no se puedo leer el archivo')
    return
  }
    console.log(data)
})