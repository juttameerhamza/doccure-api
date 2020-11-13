'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn("users","dateOfBirth", {
            type: Sequelize.DATEONLY,
            allowNull: true,
            after: 'lastName'
        }, { transaction: t }),
        queryInterface.addColumn("users","phone", {
          type: Sequelize.STRING,
          allowNull: true,
          after: 'dateOfBirth'
      }, { transaction: t })
      ]); 
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
