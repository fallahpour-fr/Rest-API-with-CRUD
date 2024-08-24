const { DataTypes, Model } = require('sequelize');

class Role extends Model {
  static associate(models) {
    Role.belongsToMany(models.User, { through: 'user_role', as: 'users', foreignKey: 'roleId' });
    Role.belongsToMany(models.Permission, { through: 'role_permission', as: 'permissions', foreignKey: 'roleId' });
  }
}

function initializeRoleModel(sequelize) {
  Role.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
