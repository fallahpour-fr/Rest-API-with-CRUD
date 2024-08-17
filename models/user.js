// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('mysql://root:my-secret-pw@localhost:3306/crud'); 

// class User extends Model {
//     static associate(models) {
//         // Define association here
//         User.hasMany(models.Post, {
//           foreignKey: 'userId',
//           as: 'posts'  // Optional alias for the association
//         });
//       }
// }

// User.init({
//     id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// }, {
//     sequelize, 
//     modelName: 'User', 
//     timestamps: false, 
// });

// module.exports = User;

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql://root:my-secret-pw@localhost:3306/crud');

class Post extends Model { }

Post.init({
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

module.exports = Post;