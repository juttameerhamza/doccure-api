const User = require('../models/userModel');
const Role = require('../models/roleModel');
const Work = require('../models/workModel');
const Award = require('../models/awardModel');
const Education = require('../models/educationModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const jwt = require('../utils/jwt');

exports.signUp = catchAsync(async (req, res, next) => {
    if(req.body.roleId === 1) return next(new AppError('forbidden access!', 403));

    const user = await User.create(req.body);

    res.status(200).json({ message: 'success', data: { user } });
});

exports.login = catchAsync(async (req, res, next) => {
    const user = await User.findOne({ 
        where: req.body,
        include: [Role, Work, Award, Education],
        attributes: { exclude: ['password'] }
    });

    if (!user) return next(new AppError('Incorrect email or password', 401));

    const token = jwt.signToken({ userId: user.userId, roleId: user.roleId });

    res.status(200).json({ message: 'success', data: { user, token } });
});

exports.getUser = catchAsync(async (req, res, next) => {
    const user = await User.findOne({
        where: { userId: req.params.id }
    });

    res.status(200).json({ message: 'success', data: { user } });
})

exports.updateUser = catchAsync(async (req, res, next) => {
    const user = await User.update(req.body, { where: { userId: req.params.id } });

    res.status(200).json({ message: 'success', data: { user } });
})