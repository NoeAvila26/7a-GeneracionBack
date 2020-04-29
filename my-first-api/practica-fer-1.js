//query parameters
const fs = require('fs')
const express = require('express')
const kodemia = JSON.parse(fs.readFileSync('kodemia-2.json'))
const server = express()
server.use(express.json())

server.get('/', (request,response) => {
  response.json({
    message: 'my firstApi running'
  })
})

server.get('/koders', (request,response) => {
  const {limit = 5, active = true } = request.query
  response.json({
    message:'all the koders',
    data:{
      koders: kodemia.koders.slice(0, parseInt(limit)).filter((koder) => {
        const isActive = new Boolean(active)
        return koder.active == isActive
      })
    }
  })
})


server.get('/koders/:idKoder' ,(request, response) => {
  const  {idKoder} = request.params
  console.log(idKoder)
  response.json({
    koders: kodemia.koders.find((koder) => { 
      return koder.id === parseInt(idKoder)
    })
  })
})



server .listen(8081, () => {
  console.log('server is running')
})

//que filtre por generacion y que sea con query parameters
//active con uri 