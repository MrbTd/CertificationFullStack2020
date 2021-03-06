var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

mongoose.connection.on("Reussi",()=> {console.log("Running!!!!")})

const persoSchema = new mongoose.Schema({
  name:{type: String,required:true,minlength:3},
  number: {type: String,required:true, minlength:8}
})

persoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

persoSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Person', persoSchema)