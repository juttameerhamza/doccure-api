const router = require('express').Router();
const educationController = require('../controllers/educationController');

router.route('/').post(educationController.addEducation);
router.route('/:id')
    .delete(educationController.deleteEducation);

module.exports = router;