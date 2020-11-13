const router = require('express').Router();

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const workRoutes = require('./routes/workRoutes');
const educationRoutes = require('./routes/educationRoutes');
const awardRoutes = require('./routes/awardRoutes');

const jwt = require('./utils/jwt');

router.use('/auth', authRoutes);
router.use('/user', jwt.protect, userRoutes);
router.use('/appointment', jwt.protect, appointmentRoutes);
router.use('/work', jwt.protect, workRoutes);
router.use('/education', jwt.protect, educationRoutes);
router.use('/award', jwt.protect, awardRoutes);
router.use('/', (req, res, next) => res.send('Server is running...'))

module.exports = router;