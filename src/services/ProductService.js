const Product = require('../models/Product');

class ProductService {

    createProduct = async (data) => {
        
        try {
            const product = new Product(data);
            await product.save();
            return product;
        } catch (error) {
            throw error;
        }
    }

    getAll = async () => {
        try {
            const products = await Product.find();
            return products;
        } catch (error) {
            throw error;
        }
    }

    updateProduct = async (id, data) => {
        try {
            const result = await Product.updateOne({_id: id}, {productname: data.productname});
            return true;
        } catch (error) {
            throw error;
        }
    }

    deleteProduct = async (id) => {
        try {
            const product = await Product.findByIdAndDelete({_id: id});
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductService();