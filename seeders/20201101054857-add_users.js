'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: 'admin@doccure.com',
      userName: 'admin',
      password: '12345',
      roleId: 1
    }, {
      email: 'doctor@doccure.com',
      userName: 'doctor',
      password: '12345',
      roleId: 2
    }, {
      email: 'patient@doccure.com',
      userName: 'patient',
      password: '12345',
      roleId: 3
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
