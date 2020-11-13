const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const User = require('./userModel');

const TimeSlot = sequelize.define('timeslots', {
    timeslotId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    startTime: {
        type: Sequelize.TIME,
        allowNull: false
    },
    endTime: {
        type: Sequelize.TIME,
        allowNull: false 
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

// User.hasOne(Role, { foreignKey: 'roleId' });
TimeSlot.belongsTo(User, { foreignKey: 'userId' });

module.exports = TimeSlot;