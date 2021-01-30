const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}
 
const password = process.argv[2]

const url =
  `mongodb+srv://MrbTd:${password}@cluster0.erpt2.mongodb.net/note-app?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 5
  },
  date: Date,
  important: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: process.argv[3],
  date: new Date(),
  important: true,
  
})


note.save().then(response => {
  console.log('note saved!');
  mongoose.connection.close();
})

/*
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})*/