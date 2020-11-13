const Appointment = require('../models/appointmentModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createAppointment = catchAsync(async (req, res, next) => {
    const appointment = await Appointment.create(req.body);

    res.status(201).json({ message: 'success', data: { appointment } });
});

exports.getAppointment = catchAsync(async (req, res, next) => {
    const appointment = await Appointment.findOne({
        where: { appointmentId: req.params.id },
        include: [
            { model: User, as: 'patient', },
            { model: User, as: 'doctor', }
        ]
    });

    res.status(200).json({ message: 'success', data: { appointment } });
});