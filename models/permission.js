const { DataTypes, Model } = require('sequelize');

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
        unique: false,
      },
    },
    {
      sequelize,
      modelName: 'Permission',
      timestamps: false,
    }
  );
  return Permission;
}

module.exports = initializePermissionModel;