const Education = require('../models/educationModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.addEducation= catchAsync(async (req, res, next) => {
    const education = await Education.create(req.body);

    res.status(200).json({ message: 'success', data: { education } });
});

exports.deleteEducation = catchAsync(async (req, res, next) => {
    const education = await Education.destroy({ where: { educationId: req.params.id } });

    res.status(200).json({ message: 'success', data: { education } });
});
