const express = require('express')
const kodersRouter = require('./routes/koders')
const authRouter = require('./routes/auth')

// const koders = require('./usecases/koders')
const app = express()

// middleware
// parsea cada request a json, solo en caso de que contenga
// el header 'content-type' con valor 'application/json'
// toma el body y lo transforma en un json que nos lo entrega
// en el objeto reques.body
app.use(express.json())

// middleware global (afecta a toda la aplicacion)
app.use((request, response, next) => {
  console.log(`>[${request.method}] ${request.url} body:${JSON.stringify(request.body)}`)
  console.log()
  next()
})

// app.use(authMiddleware)

// montamos el router de koders
app.use('/koders', kodersRouter)
app.use('/auth', authRouter)

// todos los recursos o rutas se escrien en plural

// app.get('/koders', async (request, response) => {
//   const allKoders = await koders.getAll()
//   response.json({
//     message: 'all koders',
//     data: {
//       koders: allKoders
//     }
//   })
// })

// router '/koders'
// GET /koders
// POST /koders
// PATCH /koders/:id
// DELETE /koders/:id

// router se puede montar en la ruta que quiera
// router se montara /koders
// GET / => GET /koders
// POST / => POST /koders

module.exports = app
