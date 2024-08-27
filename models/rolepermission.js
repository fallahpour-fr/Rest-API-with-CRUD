const { DataTypes, Model } = require('sequelize');

class role_permission extends Model {
    // static associate(models) {
    //     role_permission.belongsTo(models.Role, { foreignKey: 'roleId' });
    //     role_permission.belongsTo(models.Permission, { foreignKey: 'permissionId' });
    // }
}

function initializePermissionRoletModel(sequelize) {
    role_permission.init({
        roleId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Roles',
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
        modelName: 'role_permission',
        tableName: 'role_permission',
        timestamps: false,
    });

    return role_permission;
}
module.exports = initializePermissionRoletModel;

