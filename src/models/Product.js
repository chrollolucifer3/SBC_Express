const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {type: String, required: true},
    producer: {type: String},
    yearofmanufacture: {type: Date},
    quantity: {type: Number},
    price: {type: Number}
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;