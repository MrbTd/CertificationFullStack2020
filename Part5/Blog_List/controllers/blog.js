const blogRoute = require('express').Router()
const { request } = require('express')
const { response } = require('../app')
const Blog=require('../models/blog')
const User = require('../models/user')
const jwt=require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogRoute.get('/', async (request, response) => {
   const blogs=await Blog.find({}).populate('user', { username: 1, name: 1 })
        response.json(blogs)
      
  })

  blogRoute.get('/:id',async (request,response)=>{
    const body=request.body
    const result= await Blog.findById(request.params.id)
    try{
    if(result){
      response.json(result.toJSON())
    }
    else{
      response.status(404).end()
    }
  }catch(exception){
    next(exception)
  }
    
  })
  
  blogRoute.post('/', async (request, response, next) => {
  
  const body = request.body
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
    console.log('decodedToken',decodedToken)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user:user._id
    })
    
  try{
    const savedBlog = await blog.save()

    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog)
  }
  catch(exception){
    next(exception)
  }
    
  })


  blogRoute.put("/:id", async (request, response, next) => {
    const body = request.body;
  
    const updateBlog = {
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    };
    try {
    await Blog.findByIdAndUpdate(request.params.id, updateBlog)
      response.status(201).send();
    } catch (error) {
      next(error);
    }
  });
  //

  blogRoute.delete("/:id", async (request, response, next) => {
    try {
      const token=getTokenFrom(request)
      const decodedToken = jwt.verify(token, process.env.SECRET)
      const decokedTokenId = decodedToken.id
      const user = await User.findById(decokedTokenId)
      const blog = await Blog.findById(request.params.id)
  
      if (!token || !decodedToken.id) {
        return response
          .status(401)
          .json({ error: 'token missing or invalid' })
      } else if (blog.user.toString() !== user._id.toString()) {
        return response
          .status(401)
          .json({ error: 'invalid user' })
      }
      await Blog.findByIdAndRemove(request.params.id);
      response.status(204).end();
    } catch (error) {
      next(error);
    }
  });

  //
  
  module.exports= blogRoute