const router = require('express').Router();
const workController = require('../controllers/workController');

router.route('/').post(workController.addWork);
router.route('/:id')
    .delete(workController.deleteWork);

module.exports = router;