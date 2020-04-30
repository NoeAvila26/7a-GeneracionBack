const express = require('express')
const mentorsRouter = require('./routes/mentors')
const app = express()

app.use(express.json())
app.use('/mentors', mentorsRouter)

module.exports = app
