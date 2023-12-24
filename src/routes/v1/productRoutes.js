const express = require('express');
const ProductController = require('../../controllers/ProductController');
const router = express.Router();
const Joi = require('joi');
const verifyToken = require('../../middlewares/verifyToken');


const productValidationSchema = Joi.object({
    productname: Joi.string().required().messages({
    'any.required': `"productname" không được bỏ trống !`
  }),
  producer: Joi.string().required(),
  yearofmanufacture: Joi.date().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateProductData = (req, res, next) => {
    const { error, value } = productValidationSchema.validate(req.body, {abortEarly: false});
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};


router.get('/', ProductController.getAll)

    //POST method
router.post('/', validateProductData, verifyToken, ProductController.createProduct);

// PUT method
router.put('/:id', ProductController.updateProduct);

//   // DELETE method
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;