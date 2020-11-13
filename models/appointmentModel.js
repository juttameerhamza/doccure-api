const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const User = require('./userModel');

const Appointment = sequelize.define('appointments', {
    appointmentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    patientId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'pending',
        allowNull: false
    },
    isEnd: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    timestamps: false
});

// User.hasOne(Role, { foreignKey: 'roleId' });
Appointment.belongsTo(User, { as: 'patient', foreignKey: 'patientId' })
Appointment.belongsTo(User, { as: 'doctor', foreignKey: 'doctorId' })

module.exports = Appointment;