class ProductController {
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
            const productId = req.params.id;
            res.status(200).json({msg: `Get id ${productId}`})
        } catch (error) {
            throw error;
        }
    }

    create = (req, res, next) => {
        try {
            const {productId, productName} = req.body;
            res.status(200).json({msg:` Tạo thành công`,
            productId,
            productName
        }) 
        } catch (error) {
            throw error;
        }
    } 

    update = (req, res, next) => {
        try {
            const updateProductData = req.body;
            res.status(200).json({msg: ` Cập nhật Product thành công`, data: updateProductData})
        } catch (error) {
            throw error
        }
    }

    delete = (req, res, next) => {
        try {
            const productId = req.params.id;
            res.status(200).json({msg: ` Xóa thành công sản phẩm có id: ${productId}`})
        } catch (error) {
            
        }
    }
}

module.exports = new ProductController();