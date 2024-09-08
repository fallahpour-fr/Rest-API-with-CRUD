// require('dotenv').config();
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.SEQUELIZE_CONNECTION);

// let initializeUserModel = require('./user');
// let initializeRoleModel = require('./role');
// let initializePermissionModel = require('./permission');
// let initializePostModel = require('./post');
// let initializeUserRoleModel = require('./userrole');
// let initializeRolePermissiontModel = require('./rolepermission');

// // Initialize the Post model with sequelize
// const Post = initializePostModel(sequelize);
// const Role = initializeRoleModel(sequelize);
// const Permission = initializePermissionModel(sequelize);
// const User = initializeUserModel(sequelize);
// const UserRole = initializeUserRoleModel(sequelize);
// const RolePermission = initializeRolePermissiontModel(sequelize);

// // Establish associations
// User.associate({ Role, Post, UserRole });
// Role.associate({ User, Permission, UserRole, RolePermission });
// Permission.associate({ Role, RolePermission });
// Post.associate({ User });

// // Sync models if needed
// sequelize.sync();

// module.exports = { sequelize, User, Role, Permission, Post, UserRole, RolePermission };

////////////////////////////////////////////////////////

'use strict';

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const db = {};
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.SEQUELIZE_CONNECTION);


fs
.readdirSync(__dirname)
.filter(file => {
return (
file.indexOf('.') !== 0 &&
file !== basename &&
file.slice(-3) === '.js' &&
file.indexOf('.test.js') === -1
);
})
.forEach(file => {
const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
if (db[modelName].associate) {
db[modelName].associate(db);
}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
