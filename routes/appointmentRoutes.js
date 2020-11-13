const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/', appointmentController.createAppointment);
router.
    route('/:id')
    .get(appointmentController.getAppointment);


module.exports = router;