require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.SEQUELIZE_CONNECTION);

let initializeUserModel = require('./user');
let initializeRoleModel = require('./role');
let initializePermissionModel = require('./permission');
let initializePostModel = require('./post');
let initializeUserRoleModel = require('./userrole');
let initializeRolePermissiontModel = require('./rolepermission');

// Initialize the Post model with sequelize
const Post = initializePostModel(sequelize);
const Role = initializeRoleModel(sequelize);
const Permission = initializePermissionModel(sequelize);
const User = initializeUserModel(sequelize);
const UserRole = initializeUserRoleModel(sequelize);
const RolePermission = initializeRolePermissiontModel(sequelize);

// Establish associations
User.associate({ Role, Post, UserRole });
Role.associate({ User, Permission, UserRole, RolePermission });
Permission.associate({ Role, RolePermission });
Post.associate({ User });

// Sync models if needed
sequelize.sync();

module.exports = { sequelize, User, Role, Permission, Post, UserRole, RolePermission };

