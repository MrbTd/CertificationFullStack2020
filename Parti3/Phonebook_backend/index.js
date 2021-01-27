const express=require('express')
const app=express()
const bodyParser = require('body-parser')
var morgan=require("morgan")
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')

app.use(bodyParser.json())
app.use(express.static('build'))
app.use(cors())


let persons=[
    {
        id:1,
        name:'Arto Hellas',
        number:'040-123456'
    },
    {
        id:2,
        name:'Ada Lovelance',
        number:'39-44-5323523'
    },
    {
        id:3,
        name:'Dan Abramov',
        number:'12-43-234345'
    },
    {
        id:4,
        name:'Mary Poppendick',
        number:'39-23-6423122'
    }
]

app.use(morgan('tiny'))

const middleBody=(req,rep,next)=>{
    console.log(req.body)
    next()
}
app.use(middleBody)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
    }  else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
  
    next(error)
  }
  
  app.use(errorHandler)

app.get('/',(request,response)=> {
    response.end("root")
})


app.get('/api/persons',(request,response)=> {
    Person.find({}).then(result =>{
    response.json(result.map(val => val.toJSON()))
    })
    
})


app.get('/api/info',(request,response)=> {
    const nb=Person.length
    const d=new Date()
    response.send( '<div> Phonebook as info for '+nb+ ' people<p>'+d+'<d/p></div>')
})
  
app.get('/api/persons/:id',(request,response,next)=>{
    Person.findById(request.params.id).then(persons => {
        if (persons) {
            response.json(persons)
          } else {
            response.status(404).end()
          }
        })
        .catch(error => console.log('get id',error))

    })
   


app.delete('/api/persons/:id',(request,response)=>{
    Person.deleteOne({ _id: request.params.id })
    .then(() => Person.find({}).then(result =>{
        response.json(result.map(val => val.toJSON()))
        }))
    .catch(error => console.log('delete',error))
});




app.post('/api/persons',(request,response,next)=>{

    let body=request.body
   
        const person = new Person({
            name:body.name,
            number: body.number
            
          })
        
          person.save()
          .then(savedPerson => {
            return savedPerson.toJSON()
          })
          .then(savedAndFormattedPerson => {
            response.json(savedAndFormattedPerson) 
          })
          .catch(error =>response.send('post',error))
    

})


app.put('/api/persons/:id',(request,response)=>{

    const pers= { 
        number:request.body.number,
         _id: request.params.id 
        }

    Person.updateOne({ name: request.body.name },pers)
    .then(persons => {(persons)?Person.findById(request.params.id).then((rep)=> {response.json(rep)}): response.status(404).end()
           
        })
    .catch(error => console.log('put',error));
});

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
  
 

const PORT = process.env.PORT
app.listen(PORT,()=> console.log("running ...",PORT))