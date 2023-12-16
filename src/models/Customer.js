const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true, unique: true },
    address: {type: String},
    dateofbirth: {type: Date},
    gender:{type: String}
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;