const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const TextComedySchema = new mongoose.Schema({
  rating: Number,  
  title: String,
  body: String,
  author: String,
  authorImgUrl: String,
  created: { type: Date, default: Date.now },
  edited: { type: Date, default: Date.now },
  reported: Boolean,
  punch: Boolean,
  punchtext: String,
});

const TextComedy = mongoose.model('TextComedy', TextComedySchema);

module.exports = TextComedy;
