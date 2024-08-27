const { DataTypes, Model } = require('sequelize');

class Role extends Model {
  static associate(models) {
    Role.belongsToMany(models.User, { through: models.UserRole });
    Role.belongsToMany(models.Permission, { through: models.RolePermission });
  }
}

function initializeRoleModel(sequelize) {
  Role.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
    },
    {
      sequelize,
      modelName: 'Role',
      timestamps: false,
    }
  );

  return Role
}
module.exports = initializeRoleModel;
