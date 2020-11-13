const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const User = require('./userModel');

const Location = sequelize.define('locations', {
    locationId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    degree: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fee: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: true 
    },
    address: {
        type: Sequelize.STRING,
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
// Education.belongsTo(User, { foreignKey: 'userId' });

module.exports = Location;