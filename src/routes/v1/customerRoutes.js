const express = require('express');
const CustomerController = require('../../controllers/CustomerController');
const router = express.Router();
    //Get method
router.get('/', CustomerController.getAll)

    //POST method
router.post('/', CustomerController.createCustomer);

    // PUT method
router.put('/:id', CustomerController.updateCustomer);

  // DELETE method
router.delete('/:id', CustomerController.deletedeleteCustomer);

module.exports = router;