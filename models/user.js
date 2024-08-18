const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql://root:my-secret-pw@localhost:3306/crud');
const Post = require('./post');

class User extends Model {
    static associate() {
        User.hasMany(Post, {
            foreignKey: 'userId',
            as: 'posts'
        });
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
},
    {
        sequelize,
        modelName: 'User',
        timestamps: false,
    });

module.exports = User;