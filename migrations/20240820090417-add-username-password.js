'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: true
    }),
      await queryInterface.addColumn('Users', 'password', {
        type: Sequelize.STRING,
        allowNull: true
      })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'username');
    await queryInterface.removeColumn('Users', 'password');
  }
};
