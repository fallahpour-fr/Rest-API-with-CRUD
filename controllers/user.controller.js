const User = require('../models/user');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const { name } = req.body;
            const myObject = await User.create({
                name
            });

            res.status(200).json(myObject);
        } catch (error) {
            console.log(error)
            res.status(500).send();
        }
    },
    findUser: async (req, res, next) => {
        try {
            const userId = req.params.id;
            const myObject = await User.findByPk(userId);
            res.status(200).json(myObject);
        } catch (error) {
            console.log(error)
            res.status(500).send();
        }
    },
    findAllUser: async (req, res, next) => {
        try {
            const myData = await User.findAll();
            res.status(200).json(myData);
        } catch (error) {
            console.log(error)
            res.status(500).send();
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const userId = req.params.id;
            const result = await User.destroy({
                where: { id: userId }
            });

            if (result) {
                res.status(200).json({
                    status: 200,
                    statustext: 'Delete',
                    message: 'User deleted successfully'
                });
            } else {
                res.status(404).json({
                    status: 404,
                    statustext: 'Not Found',
                    message: 'User not found'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send();
        }
    },
    editUser: async (req, res, next) => {
        try {
            const userId = req.params.id;
            const userData = req.body;

            // Check if userData is valid
            if (!userData || !userData.name) {
                return res.status(400).json({
                    status: 400,
                    statustext: 'Bad Request',
                    message: 'Invalid user data',
                });
            }

            // Update user
            const [updated] = await User.update(userData, {
                where: { id: userId }
            });

            if (updated) {
                const updatedUser = await User.findByPk(userId);
                res.status(200).json({
                    status: 200,
                    statustext: 'Ok',
                    message: 'User updated successfully',
                    data: updatedUser,
                });
            } else {
                res.status(404).json({
                    status: 404,
                    statustext: 'Not Found',
                    message: 'User not found',
                });
            }
        } catch (error) {
            next(error);
        }
    },
    allUserInfo:
}