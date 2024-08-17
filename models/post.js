const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql://root:my-secret-pw@localhost:3306/crud');

class Post extends Model {
        static associate(models) {
          // Define association here
          Post.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'  // Optional alias for the association
          });
        }
}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id',
        },
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
}, {
    sequelize,
    modelName: 'Post',
    timestamps: true,
});

module.exports = Post;
