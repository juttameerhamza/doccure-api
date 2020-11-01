const User = require('../models/userModel');
const Role = require('../models/roleModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const jwt = require('../utils/jwt');

exports.getUser = (req, res, next) => {
    res.status(200).json({ message: 'success' });
}

exports.signUp = catchAsync(async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(200).json({ message: 'success', data: { user } });
});

exports.login = catchAsync(async (req, res, next) => {
    const user = await User.findOne({ 
        where: req.body,
        include: [Role],
        attributes: { exclude: ['password'] }
    });

    if (!user) return next(new AppError('Incorrect email or password', 401));

    const token = jwt.signToken({ userId: user.userId, roleId: user.roleId })

    res.status(200).json({ message: 'success', data: { user, token } });
});