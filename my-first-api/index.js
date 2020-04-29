const fs = require('fs')

const express = require('express')

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))

const server = express()

server.use(express.json()) //middleware funciones en medio // es para ahorrarno el paso de la linea 5

// endpoints: la combinacion de un metodo y una ruta
// metodo: metodo HTTP-GET-POST-DELETE-PUT-PATCH
// ruta: strings que denotan recursos en nuestro servidor

server.get('/', (request, response) => {
  response.json({
    message: 'My first API is running'
  })
})

//query parameters
server.get('/koders', (request ,response) => {
  // const {limit = 10 } =request.query
  response.json({
    message:'all the koders',
    data:{
      koders: kodemia.koders,
      // koders: kodemia.koders.slice(0, parseInt(limit) )
    }
  })
})

server.post('/koders', (request ,response) => {
const {name, generation } = request.body

//en esta paso si se crea al objeto
// const  newKoder = {
//   name: request.body.name,
//   generation: request.body.generation
// }  

kodemia.koders.push({
  name,
  generation
})

response.json({
  message: 'new koder added',
  data: {
    koder: {
      name,
      generation
    }
  }
})

})

//uri parameters
//GET /koders[name]
//GET /koders/charles -> name - charles
//GET /koders/fernanda -> name - fernanda
//GET /koders/[name]


// server.get('/koders/:name',(request, response) => {
//   response.json({
//     name:request.params.name
//   })
// })

server.get('/koders/:index',(request, response) => { // uri parametros hace que lo valores obtenidos sean dinamicos en este ejemplo mediante :index
  const {index} = request.params
  console.log(index)
  response.json({
    koders: kodemia.koders[index] //
  })
})

//query parameters
//http://servidor/ruta/del/recurso?
//GET http://api.kodemia.mx/koders?limit-666from-10&to





server.listen(8081, () => {
  console.log('server is running')
})

//200.1.2.10
///home/noela/Documentos/Bootcamp/7a-GeneracionBack/my-first-api





//practica
//un endpoint que reciba el indice de un koder y regre el koder que se encuentre en ese indice
//GET /koders/:indice --> indice = 0 ...kodemia.koders[indice]

