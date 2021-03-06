const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');
// const findOrCreate = require('findorcreate-promise');


const petschema = new Schema({
  petname:{
    type:String,
    required: false
  },
  petimg:{
    type:String,
    required:false
  }
});


const userSchema = new Schema({
  fname: {
    type: String,
    required: false
  },
  lname: {
    type: String,
    required:false
  },
  email: {
    type: String,
    required:false
  },
  pnum: {
    type:Number,
    required:false
  },
  password:{
    type:String,
    required:false
  },

  date: {
    type: Date,
    default: Date.now
  },
  secretToken:{
    type:String,
    required:false
  },
  googleId:{
    type: String,
    required:false
  },
  active:{
    type:Boolean

  },
  pet:[petschema]
});
userSchema.plugin(findOrCreate);
// userSchema.plugin(findOrCreate);
// Model
const user = mongoose.model('user', userSchema);
module.exports = user;
