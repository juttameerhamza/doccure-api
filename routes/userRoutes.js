const router = require('express').Router();
const userController = require('../controllers/userController');
const jwt = require('../utils/jwt');

router.route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser);

module.exports = router;