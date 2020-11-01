const router = require('express').Router();

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/', (req, res, next) => res.send('Server is running...'))

module.exports = router;