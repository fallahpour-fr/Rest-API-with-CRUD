'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_permission', {
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles', // references the Roles table
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      permissionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Permissions', // references the Permissions table
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('role_permission');
  }
};