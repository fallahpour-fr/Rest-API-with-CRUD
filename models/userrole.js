const { DataTypes, Model } = require('sequelize');

class user_role extends Model {
    static associate(models) {
        // user_role.belongsToMany(models.Role, { through: 'user_role', foreignKey: 'userId', otherKey: 'roleId' });
        // user_role.belongsToMany(models.User, { through: 'user_role', foreignKey: 'roleId', otherKey: 'userId' });
    }
}

function initializeUserRoleModel(sequelize) {
    user_role.init({
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
        modelName: 'user_role',
        tableName: 'user_role', // Make sure this matches your actual table name
        timestamps: false, // Disable timestamps if you don't want createdAt/updatedAt
    })

    return user_role;
};

module.exports = initializeUserRoleModel;