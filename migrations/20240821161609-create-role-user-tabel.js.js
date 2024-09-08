'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserRole', {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // references the Users table
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles', // references the Roles table
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserRole');
  }
};
