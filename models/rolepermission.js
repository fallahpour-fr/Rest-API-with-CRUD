const { DataTypes, Model } = require('sequelize');

class RolePermission extends Model {
}

function initializeRolePermissiontModel(sequelize) {
    RolePermission.init({
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
        modelName: 'RolePermission',
        tableName: 'RolePermission',
        timestamps: false,
    });

    return RolePermission;
}
module.exports = initializeRolePermissiontModel;

