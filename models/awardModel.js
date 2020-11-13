const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const User = require('./userModel');

const Award = sequelize.define('awards', {
    awardId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false 
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true 
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

// User.hasOne(Role, { foreignKey: 'roleId' });
// Award.belongsTo(User, { foreignKey: 'userId' });

module.exports = Award;