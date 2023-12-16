const express = require('express');
const ProductController = require('../../controllers/ProductController');
const router = express.Router();

router.get('/', ProductController.getAll)

    //POST method
router.post('/', ProductController.createProduct);

// PUT method
router.put('/:id', ProductController.updateProduct);

//   // DELETE method
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;