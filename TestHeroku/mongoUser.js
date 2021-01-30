const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}
 
const password = process.argv[2]

const url =
  `mongodb+srv://MrbTd:${password}@cluster0.erpt2.mongodb.net/note-app?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const userSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true
    },
    name: String,
    passwordHash: String,
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
      }
    ],
  })
  

const User = mongoose.model('User', userSchema)


    var passwordHash
    const saltRounds = 10
    bcrypt.hash(process.argv[5], saltRounds)
    .then(result=> {passwordHash=result })

    const user = new User({
      username: process.argv[3],
      name: process.argv[4],
      passwordHash,
    })


    user.save().then(response => {
  console.log('user saved!',passwordHash);
  mongoose.connection.close();
})


/*User.find({}).then(result => {
  result.forEach(user => {
    console.log(user)
  })
  mongoose.connection.close()
})*/