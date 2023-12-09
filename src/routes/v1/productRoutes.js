const express = require('express');
const ProductController = require('../../controllers/ProductController');
const router = express.Router();

    //Get method
router.get('/:id', ProductController.get)

router.get('/test', ProductController.get)

    //POST method
router.post('/', ProductController.create);

    // PUT method
router.put('/', ProductController.update);

  // DELETE method
router.delete('/:id', ProductController.delete);

module.exports = router;