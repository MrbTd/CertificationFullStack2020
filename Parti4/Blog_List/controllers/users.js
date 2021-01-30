const usersRouter=require('express').Router()
const { request, response } = require('express')
const User=require('../models/user')
const bcrypt=require('bcrypt')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('blogs', { author: 1, title: 1 })
    response.json(users)
  })

usersRouter.post('/', async (request, response) => {
    const body = request.body
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.passwordHash, saltRounds)
  
    const user = new User({
      username: body.username,
      passwordHash,
      name: body.name,
    })
  
    const savedUser = await user.save()
  
    response.json(savedUser)
  })
  
  module.exports = usersRouter