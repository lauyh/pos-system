const express = require('express')
const middlewares = require('./middlewares')
const morgan = require('morgan')
const {sequelize} = require('./models')
const winston = require('winston');

require('dotenv').config()

const app = express()
app.use(morgan('dev'))


const PORT = process.env.PORT || 3001

app.get("/", (req, res)=>{
  res.send("hello world")
})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)


app.listen(PORT, async()=> {
  console.log(`Server is running on port ${PORT}`)
  await sequelize.authenticate()
  console.log('Connected to database')
})