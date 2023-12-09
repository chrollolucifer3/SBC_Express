class CustomerController {
    get = (req, res, next) => {
        try {
            const {page, sort} = req.body;
            res.status(200).json({msg: `Get query string ${page} ${sort}`})
        } catch (error) {
            throw error;
        }
    }

    get = (req, res, next) => {
        try {
            const customerId = req.params.id;
            res.status(200).json({msg: `Get id ${customerId}`})
        } catch (error) {
            throw error;
        }
    }

    create = (req, res, next) => {
        try {
            const {username, password} = req.body;
            res.status(200).json({msg:` Tạo thành công`,
            username,
            password
        }) 
        } catch (error) {
            throw error;
        }
    } 

    update = (req, res, next) => {
        try {
            const updateCustomerData = req.body;
            res.status(200).json({msg: ` Cập nhật Customer thành công`, data: updateCustomerData})
        } catch (error) {
            throw error
        }
    }

    delete = (req, res, next) => {
        try {
            const customerId = req.params.id;
            res.status(200).json({msg: ` Xóa thành công khách hàng có id: ${customerId}`})
        } catch (error) {
            
        }
    }
}

module.exports = new CustomerController();