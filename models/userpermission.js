const { DataTypes, Model } = require('sequelize');

class user_permission extends Model {
    static associate(models) {
        // user_permission.belongsToMany(models.Permission, { through: 'UserPermission', foreignKey: 'userId', otherKey: 'permissionId' });
        // user_permission.belongsToMany(models.User, { through: 'UserPermission', foreignKey: 'permissionId', otherKey: 'userId' });
        user_permission.belongsTo(models.User, { foreignKey: 'userId' });
        user_permission.belongsTo(models.Permission, { foreignKey: 'permissionId' });
    }
}

function initializeUserPermissionModel(sequelize) {
    user_permission.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
            allowNull: false,
        },
        permissionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Permissions',
                key: 'id',
            },
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'user_permission',
        tableName: 'user_permission',
        timestamps: false,
    });

    return user_permission;
}
module.exports = initializeUserPermissionModel;

