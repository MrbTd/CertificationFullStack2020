const mongoose=require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const { schema } = require('./blog')

const userSchema=new mongoose.Schema({
username:{type:String,minlength:3,require:true,unique:true},
passwordHash:{type:String,minlength:3,require:true},
name:String,
blogs:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blog'
    }
],
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  const User = mongoose.model('User', userSchema)
module.exports=User
  