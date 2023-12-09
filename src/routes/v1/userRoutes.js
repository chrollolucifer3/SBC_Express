const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');

router.get('/:id', UserController.get);

router.get('/test', UserController.get);

router.post('/', UserController.create);

router.put('/', UserController.update);

  // DELETE method
router.delete('/:id', UserController.delete);

module.exports = router;