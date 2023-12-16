const CustomerService = require('../services/CustomerService')

class CustomerController {

    getAll = async (req, res, next) => {
        try {
            const product = await CustomerService.getAll();
            res.status(200).json({
                product
            })
            console.log(product);
        } catch (error) {
            throw error;
        }
    }

    createCustomer = async (req, res, next) => {
        try {
            const {fullname, phone, email, address, dateofbirth, gender} = req.body;
            let data = {fullname, phone, email, address, dateofbirth, gender};
            await CustomerService.createCustomer(data);
        } catch (error) {
            throw error;
        }
    } 

    updateCustomer = async (req, res, next) => {
        try {
            const {id} = req.params;
            const {fullname, phone, email, address, dateofbirth, gender} = req.body;
            let data = {fullname, phone, email, address, dateofbirth, gender};
            const result = await CustomerService.updateCustomer(id, data);
            if(result) {
                res.status(200).json({
                    msg: "success"
                }) 
            } else {
                res.status(500).json({msg: "fail"})
            }
        } catch (error) {
            throw error
        }
    }

    deletedeleteCustomer = async (req, res, next) => {
        try {
            const { id } = req.params;
           const customer = await CustomerService.deleteCustomer(id);

           if(customer) {
            res.status(200).json({
                msg: "success"
            }) 
        } else {
            res.status(500).json({msg: "fail"})
        }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CustomerController;