const { DataTypes, Model } = require('sequelize');

class Role extends Model {
  static associate(models) {
    Role.belongsToMany(models.User, { through: 'user_role' });
    Role.belongsToMany(models.Permission, { through: 'role_permission' });
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
