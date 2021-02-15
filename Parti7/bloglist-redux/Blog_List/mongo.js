const { response } = require('express')
const mongoose=require('mongoose')

const pass=process.argv[2]
const url='mongodb+srv://MrbTd:'+pass+'@cluster0.erpt2.mongodb.net/db-blog?retryWrites=true&w=majority'
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(response=>console.log("connecting db !!!"))
.catch(response=>console.log("error"))

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })

  blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  const Blog = mongoose.model('Blog', blogSchema)

  blog=new Blog({

    title: process.argv[3],
    author: process.argv[4],
    url: process.argv[5],
    likes: process.argv[6]
  })

  blog.save().then(resp=>{console.log("Added")
  mongoose.connection.close()
})

  

  
