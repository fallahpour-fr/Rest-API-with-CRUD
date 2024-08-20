const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql://root:my-secret-pw@127.0.0.1:3306/crud');
const bcrypt = require('bcryptjs');

class User extends Model {
    static associate(models) {
        // Define the association here
        User.hasMany(models.Post, {
            foreignKey: 'userId',
            as: 'posts'
        });
    }

    // Method to compare passwords
    validPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

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
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            },
        },
    });

module.exports = User;