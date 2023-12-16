const Customer = require('../models/Customer');

class CustomerService {
    createCustomer = async (data) => {
        try {
            const customer = new Customer(data);
            await customer.save();
            return customer;
        } catch (error) {
            throw error;
        }
    }

    getAll = async () => {
        try {
            const customers = await Customer.find();
            return customers
        } catch (error) {
            throw error
        }
    }

    updateCustomer = async (id, data) => {
        try {
            const result = await Customer.updateOne({_id: id}, {address: data.address});
            return true;

        } catch (error) {
            throw error;
        }
    }

    deleteCustomer = async(id) => {
        try {
            const customer = await Customer.findByIdAndDelete({_id: id});
            return true;
        } catch (error) {
            throw error
        }
    }
}

module.exports = new CustomerService();