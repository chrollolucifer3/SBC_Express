const express = require('express');
const CustomerController = require('../../controllers/CustomerController');
const router = express.Router();
    //Get method
router.get('/:id', CustomerController.get)

router.get('/test', CustomerController.get)

    //POST method
router.post('/', CustomerController.create);

    // PUT method
router.put('/', CustomerController.update);

  // DELETE method
router.delete('/:id', CustomerController.delete);

module.exports = router;