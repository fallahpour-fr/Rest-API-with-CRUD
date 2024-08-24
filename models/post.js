const { DataTypes, Model } = require('sequelize');

class Post extends Model {
    
    static associate(models) {
        Post.belongsTo(models.User, { foreignKey: 'userId' });
    }
}

function initializePostModel(sequelize) {

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
    }, {
        sequelize,
        modelName: 'Post',
        timestamps: true,
    })
    return Post;
}

module.exports = initializePostModel;
