const { DataTypes, Model } = require('sequelize');

class Permission extends Model {
  static associate(models) {
    Permission.belongsToMany(models.Role, { through:models.RolePermission });
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