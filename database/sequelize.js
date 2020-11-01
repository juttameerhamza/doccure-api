const { Sequelize } = require('sequelize');
const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    dialect: 'mysql',
    host: DB_HOST,
    port: DB_PORT
});

module.exports = sequelize;