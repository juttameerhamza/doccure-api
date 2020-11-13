'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn("appointments","amount", {
            type: Sequelize.FLOAT,
            allowNull: false,
            after: 'doctorId'
        }, { transaction: t }),
        queryInterface.addColumn("appointments","status", {
          type: Sequelize.STRING,
          allowNull: false,
          after: 'amount'
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
