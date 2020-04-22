const fs = require('fs')

const express = require('express')

const kodemiaMentors = JSON.parse(fs.readFileSync('kodemiaMentors.json'))

const server = express()

server.use(express.json())

server.get('/', (request, response) => {
  response.json({
    message:'my second API is running'
  })
})

server.get('/mentors', (request, response) => {
  response.json({
    message:'all the mentors',
    data:{
      kodemiaMentors:kodemiaMentors.mentors
    }
  })
})

server.post('/mentors', (request, response) => {
  const newMentor = {
    name: request.body.name,
    specialty:request.body.specialty,
    generation: request.body.generation
}
kodemiaMentors.mentors.push(newMentor)

response.json({
  message: 'new mentor added',
  data: {
    mentor: newMentor
  }
})
})

server.listen(8081, () => {
  console.log('server is running')
})