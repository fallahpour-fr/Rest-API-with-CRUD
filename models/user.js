const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
    static associate(models) {
        User.hasMany(models.Post, { foreignKey: 'userId' });
        User.hasOne(models.Role, { through: models.UserRole, foreignKey: 'userId' });
    }

    // Method to compare passwords
    validPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

function initializeUserModel(sequelize) {
    User.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            sequelize,
            modelName: 'User',
            timestamps: false,
        }
    );

    return User
}
module.exports = initializeUserModel;