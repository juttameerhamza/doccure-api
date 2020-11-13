const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const User = require('./userModel');

const Education = sequelize.define('educations', {
    educationId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    institution: {
        type: Sequelize.STRING,
        allowNull: false
    },
    degree: {
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
// Education.belongsTo(User, { foreignKey: 'userId' });

module.exports = Education;