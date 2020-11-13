const Work = require('../models/workModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.addWork = catchAsync(async (req, res, next) => {
    const work = await Work.create(req.body);

    res.status(200).json({ message: 'success', data: { work } });
});

exports.deleteWork = catchAsync(async (req, res, next) => {
    const work = await Work.destroy({ where: { workId: req.params.id } });

    res.status(200).json({ message: 'success', data: { work } });
});
