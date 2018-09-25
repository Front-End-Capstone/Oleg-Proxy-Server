const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost/capStoneUsers';
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  firstName: {
    type: String
  },
  img: {type: String},
  review: {
      type: String
    },
    date: {type: Date}

})

const users = mongoose.model('users', userSchema);

module.exports = {users};