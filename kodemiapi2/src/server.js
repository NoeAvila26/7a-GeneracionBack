const express = require('express')
const mentorsRouter = require('./routes/mentors')
const app = express()

app.use(express.json())
app.use('/', mentorsRouter)

module.exports = app
