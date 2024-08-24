const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('mysql://root:my-secret-pw@127.0.0.1:3306/crud');

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
