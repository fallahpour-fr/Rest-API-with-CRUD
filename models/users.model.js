const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:my-secret-pw@localhost:3306/crud') // Example for postgres

const User = sequelize.define(
    'User',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        // Other model options go here
        timestamps:false,
        // tableName:"Users"
    },
);

module.exports=User;

