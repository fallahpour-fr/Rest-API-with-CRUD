const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:my-secret-pw@localhost:3306/crud');

// Import models
const User = require('./user');
const Post = require('./post');

// Establish associations
User.associate({ Post });
Post.associate({ User });

// Sync models if needed
sequelize.sync();

// Export models and sequelize instance
module.exports = { sequelize, User, Post };
