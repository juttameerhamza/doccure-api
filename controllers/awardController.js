const Award = require('../models/awardModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.addAward= catchAsync(async (req, res, next) => {
    const award = await Award.create(req.body);

    res.status(200).json({ message: 'success', data: { award } });
});

exports.deleteAward = catchAsync(async (req, res, next) => {
    const award = await Award.destroy({ where: { awardId: req.params.id } });

    res.status(200).json({ message: 'success', data: { award } });
});
