const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('mysql://root:my-secret-pw@127.0.0.1:3306/crud');

class Permission extends Model {
  static associate(models) {
    Permission.belongsToMany(models.User, { through: 'user_permission', as: 'users', foreignKey: 'permissionId' });
    Permission.belongsToMany(models.Role, { through: 'role_permission', as: 'roles', foreignKey: 'permissionId' });
  }
}

function initializePermissionModel(sequelize) {

  Permission.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Permission',
    }
  );
  return Permission;
}

module.exports = initializePermissionModel;