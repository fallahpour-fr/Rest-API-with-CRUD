require('dotenv').config();
const Sequelize = require('sequelize');
// const sequelize = new Sequelize('mysql://root:my-secret-pw@127.0.0.1:3306/crud');
const sequelize = new Sequelize(process.env.SEQUELIZE_CONNECTION);
let initializeUserModel = require('./user');
let initializeRoleModel = require('./role');
let initializePermissionModel = require('./permission');
let initializePostModel = require('./post');
let initializeUserRoleModel = require('./userrole');
let initializePermissionRoletModel = require('./rolepermission');
// Initialize the Post model with sequelize
const Post = initializePostModel(sequelize);
const Role = initializeRoleModel(sequelize);
const Permission = initializePermissionModel(sequelize);
const User = initializeUserModel(sequelize);
const UserRole = initializeUserRoleModel(sequelize);
const PermissionRole = initializePermissionRoletModel(sequelize);
// Establish associations
User.associate({ Role, Permission, Post });
Role.associate({ User, Permission });
Permission.associate({ User, Role });
Post.associate({ User });
UserRole.associate({ User, Role });
PermissionRole.associate({ Permission, Role });

// Sync models if needed
sequelize.sync();

module.exports = { sequelize, User, Role, Permission, Post };

