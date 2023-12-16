const ProductService = require('../services/ProductService')

class ProductController {
    
    createProduct = async (req, res, next) => {

        try {
            const {productname, producer, yearofmanufacture, quantity, price} = req.body;
            let data = {productname, producer, yearofmanufacture, quantity, price};
            await ProductService.createProduct(data);
        } catch (error) {
            throw error;
        }
    }

    getAll = async (req, res, next) => {
        
        try {
            const products = await ProductService.getAll();
            res.status(200).json({
                products
            })    
        } catch (error) {
            throw error;
        }
    }

    updateProduct = async (req, res, next) => {
        try {
            const {productname, producer, yearofmanufacture, quantity, price} = req.body;
            let data = {productname, producer, yearofmanufacture, quantity, price};
            const { id } = req.params;
            const result = await ProductService.updateProduct(id, data);
            if(result) {
                res.status(200).json({
                    msg: 'success'
                })
            } else {
                res.status(500).json({
                    msg: 'fail'
                })
            }
        } catch (error) {
            throw error;
        }
    }

    deleteProduct = async(req, res, next) => {
        try {
            const {id} = req.params;
            await ProductService.deleteProduct(id);
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductController();