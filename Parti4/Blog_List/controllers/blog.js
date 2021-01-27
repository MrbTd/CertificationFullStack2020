const blogRoute = require('express').Router()
const { request } = require('express')
const { response } = require('../app')
const Blog=require('../models/blog')



blogRoute.get('/', async (request, response) => {
   const blogs=await Blog.find({})
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
  
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    })
  try{
    const savedBlog = await blog.save()
    response.json(savedBlog)
  }catch(exception){
    next(exception)
  }
    
  })


  blogRoute.put('/:id',async (request,response)=>{
    const body=request.body

    const objBlog={
      likes: body.likes
    }

    try {
   const resultat= await Blog.findByIdAndUpdate(request.params.id, objBlog ,{new :true})
   response.json(resultat.toJSON())
    }catch(exception){
      next(exception)
    }
  })

  blogRoute.delete('/:id', async (request, response, next) => {
    try {
      await Blog.findByIdAndRemove(request.params.id)
      response.status(204).end()
    } 
    catch (exception) {
      next(exception)
    }
  })
  
  module.exports= blogRoute