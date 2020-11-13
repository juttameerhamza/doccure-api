const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const User = require('./userModel');

const Work = sequelize.define('works', {
    workId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    end: {
        type: Sequelize.INTEGER,
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
// Work.belongsTo(User, { foreignKey: 'userId' });

module.exports = Work;