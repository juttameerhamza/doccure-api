const router = require('express').Router();
const awardController = require('../controllers/awardController');

router.route('/').post(awardController.addAward);
router.route('/:id')
    .delete(awardController.deleteAward);

module.exports = router;