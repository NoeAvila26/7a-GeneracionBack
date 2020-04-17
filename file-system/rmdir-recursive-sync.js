const fs = require('fs')

function rmdir (pathToDelete) {
  const files = fs.readdirSync(pathToDelete)
  files.forEach((file,index) =>{
    const pathToFile = `${pathToDelete}/${file}`
    const fileStat = fs.statSync(pathToFile)
    if(fileStat.isDirectory()) {
      rmdir(pathToFile)
    }else {
      fs.unlinkSync(pathToFile)
    }
  })
  fs.rmdirSync(pathToDelete)
}
rmdir('deleteme')