const mongoose = require('mongoose');
const db = mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/FECreviews');
module.exports = db;
