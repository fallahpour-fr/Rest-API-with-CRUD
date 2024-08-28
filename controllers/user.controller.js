const { where, json } = require('sequelize');
const { User, Post, Role, Permission } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    signupUser: async (req, res, next) => {
        try {
            const { name, username, password } = req.body;

            // Check if the username is already taken
            const existingUser = await User.findOne({ where: { username } });
            if (existingUser) {
                return res.status(400).json({ message: 'Username already in use' });
            }

            //create user
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ name, username, password: hashedPassword });

            // Add default role and permission
            const role = await Role.findByPk(1); // Assuming role with id 1 is the default role
            if (role) {
                await newUser.addRole(role);
            }

            const permission = await Permission.findByPk(1); // Assuming permission with id 1 is the default permission
            if (permission) {
                await role.addPermission(permission);
            }

            // Generate token
            const token = jwt.sign({ id: newUser.id, username: newUser.username }, process.env.SECRET_KEY, {
                expiresIn: '100d',
            });

            res.status(201).json({
                message: "User added successfully",
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    username: newUser.username,
                    token: token
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    },
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;

            // Find the user by username
            const user = await User.findOne({ where: { username } });

            if (!user) {
                return res.status(400).json({ message: 'Invalid username or password' });
            }

            // Validate password
            const isMatch = await user.validPassword(password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid username or password' });
            }

            // Generate JWT
            const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_KEY, {
                expiresIn: '1h',
            });

            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    },
    pagination: async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;
            const { count, rows } = await User.findAndCountAll({
                limit: limit,
                offset: skip
            });
            const totalPages = Math.ceil(count / limit);
            res.json({
                totalItems: count,
                totalPages: totalPages,
                currentPage: page,
                users: rows,
            });

        } catch (error) {
            console.log(error)
        }

    },
}