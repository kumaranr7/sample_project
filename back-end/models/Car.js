const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    make:String,
    model:String,
    year:Number
})

module.exports = mongoose.model('Cars', CarSchema);