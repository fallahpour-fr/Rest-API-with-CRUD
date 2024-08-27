const { DataTypes, Model } = require('sequelize');

class UserRole extends Model {
}

function initializeUserRoleModel(sequelize) {
    UserRole.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
            allowNull: false,
        },
        roleId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Roles',
                key: 'id',
            },
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'UserRole',
        tableName: 'UserRole', // Make sure this matches your actual table name
        timestamps: false, // Disable timestamps if you don't want createdAt/updatedAt
    })

    return UserRole;
};

module.exports = initializeUserRoleModel;