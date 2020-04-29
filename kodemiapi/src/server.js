const express = require('express')
const kodersRouter = require('./routes/koders')
// const koders = require('./usecases/koders')
const app = express()

app.use(express.json())
// montamos el router de koders
app.use('/koders', kodersRouter)

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
