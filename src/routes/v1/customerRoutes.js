const express = require('express');
const CustomerController = require('../../controllers/CustomerController');
const router = express.Router();
const Joi = require('joi');
const verifyToken = require('../../middlewares/verifyToken');


const customerValidationSchema = Joi.object({
    fullname: Joi.string().required().messages({
    'any.required': `"fullname" không được bỏ trống !`
  }),
  phone: Joi.string().min(10).max(10).required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  dateofbirth: Joi.date().required(),
  gender: Joi.string().required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateUserData = (req, res, next) => {
    const { error, value } = customerValidationSchema.validate(req.body, {abortEarly: false});
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};
    //Get method
router.get('/', CustomerController.getAll)

    //POST method
router.post('/', validateUserData, verifyToken, CustomerController.createCustomer);

    // PUT method
router.put('/:id', CustomerController.updateCustomer);

  // DELETE method
router.delete('/:id', CustomerController.deletedeleteCustomer);

module.exports = router;