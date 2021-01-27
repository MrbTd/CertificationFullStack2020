const config = require('./utils/config')
const logger = require('./utils/logger')

const express = require('express')
const app = express()
const cors = require('cors') 
const blogRoute=require('./controllers/blog')
const mongoose = require('mongoose')
 
logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

app.use(cors())
app.use(express.json())

app.use('/api/blogs',blogRoute) 
module.exports=app