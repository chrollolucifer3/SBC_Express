const express = require('express');
const UserController = require('../../controllers/usercontroller');
const router = express.Router();


router.get('/', UserController.get);

router.post('/', UserController.create);

router.put('/:id', UserController.update);

router.delete('/:id', UserController.delete)

  // DELETE method
// router.delete('/:id', UserController.delete);

module.exports = router;