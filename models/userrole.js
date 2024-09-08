const { DataTypes, Model } = require('sequelize');

class UserRole extends Model {}

function initializeUserRoleModel(sequelize) {
    UserRole.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
            allowNull: false,
            primaryKey: true, // Ensure this is marked as primary key in the model as well
            foreignKey: 'userId'
        },
        roleId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Roles',
                key: 'id',
            },
            allowNull: false,
            primaryKey: true, // Ensure this is marked as primary key in the model as well
            foreignKey:'roleId'
        },
    }, {
        sequelize,
        modelName: 'UserRole',
        timestamps: false, // Disable timestamps if you don't want createdAt/updatedAt
    });

    return UserRole;
};

module.exports = initializeUserRoleModel;
