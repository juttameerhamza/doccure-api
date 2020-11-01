const router = require('express').Router();
const userController = require('../controllers/userController');
const jwt = require('../utils/jwt');

router.get('/:id', jwt.protect, userController.getUser);

module.exports = router;