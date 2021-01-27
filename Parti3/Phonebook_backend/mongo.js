const mongoose=require('mongoose')
const password=process.argv[2]
const names=process.argv[3]
const num=process.argv[4]

if(process.argv.length <3 ){
    console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const url='mongodb+srv://MrbTd:'+password+'@cluster0.erpt2.mongodb.net/db_persons?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
mongoose.connection.on("suced",()=>{console.log("Running !!!")})

const personSchema=new mongoose.Schema({
    name:String,
    number:String,
})
const Person =mongoose.model('Person',personSchema)

if(process.argv.length===3)
{
    Person.find({}).then(result => {
        result.forEach(resulta => {
          console.log(resulta)
        })
        mongoose.connection.close()
      })
   
}
else
{
    const person = new Person({
        name: names,
        number: num,
        
      })
      person.save().then(result => {
        console.log('added ',names," ",num)
        mongoose.connection.close()
      })
     
}