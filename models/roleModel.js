const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const Role = sequelize.define('role', {
    roleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    roleTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
});

module.exports = Role;