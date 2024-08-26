const { User, Role, Post, Permission } = require('../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const { name } = req.body;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        const result = await Post.findAll({
            where: {
                userId: req.user.id
            }
        });
        console.log(result);

        if (result) {
            console.log("true");
            const createdRole = await Role.create({ name });
            res.status(201).json(createdRole);
            next();
        } else {
            console.log("accesse denied")
        }

    } catch (error) {
        console.log("error", error);
    }

}