const Sequelize = require('sequelize');
const sequelize = require('../database/sequelize');

const Role = require('./roleModel');
const Work = require('./workModel');
const Education = require('./educationModel');
const Award = require('./awardModel');

const User = sequelize.define('user', {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    services: {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
            if (this.getDataValue('services')) {
                return this.getDataValue("services").split(";");
            } else {
                return null;
            }
        },
        set(val) {
            this.setDataValue('services', val.join(';'));
        }
    },
    specializations: {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
            if (this.getDataValue('specializations')) {
                return this.getDataValue("specializations").split(";");
            } else {
                return null;
            }
        },
        set(val) {
            this.setDataValue('specializations', val.join(';'));
        }
    },
    availableDays: {
        type: Sequelize.STRING,
        allowNull: true,
        get() {
            if (this.getDataValue('availableDays')) {
                return this.getDataValue("availableDays").split(";");
            } else {
                return null;
            }
        },
        set(val) {
            this.setDataValue('availableDays', val.join(';'));
        }
    },
    roleId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

User.hasOne(Role, { foreignKey: 'roleId' });
User.hasMany(Work, { foreignKey: 'userId' });
User.hasMany(Award, { foreignKey: 'userId' });
User.hasMany(Education, { foreignKey: 'userId' });

module.exports = User;