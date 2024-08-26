const { User, Post, Role, Permission } = require('../models/index');

module.exports = {

    //AdminRole
    createAdminRoleAccess: async (req, res, next) => {
        const { name } = req.body;
        const existingAdminRole = await User.findOne({ where: { name } });
        if (existingAdminRole) {
            return res.status(400).json({ message: 'Username already in use' });
        }
        const createdRole = await Role.create({ name });

        res.status(201).json({
            message: "User added successfully",
            createdRole
        });
    },
    findAdminRoleAccess: async (req, res, next) => {
        const currentRoleId = req.params.id;
        const roles = await Role.findAll({
            include: [
                {
                    model: Role,
                    where: { id: currentRoleId }, // This applies the WHERE condition on Users
                    required: true // Ensures that the JOIN behaves as an INNER JOIN
                }
            ]
        });
        res.status(200).json(roles);
    },
    deleteAdminRoleAccess: async (req, res, next) => {
        try {
            const roleId = req.params.id;
            const result = await Role.destroy({
                where: { id: roleId }
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
    editAdminRoleAccess: async (req, res, next) => {
        try {
            const roleId = req.params.id;
            const roleData = req.body;

            // Check if roleData is valid
            if (!roleData || !roleData.name) {
                return res.status(400).json({
                    status: 400,
                    statustext: 'Bad Request',
                    message: 'Invalid user data',
                });
            }

            // Update user
            const [updated] = await User.update(roleData, {
                where: { id: roleId }
            });

            if (updated) {
                const updatedUser = await User.findByPk(roleId);
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

    //AdminPermission

    createAdminPermissionAccess: async (req, res, next) => {
        const { name } = req.body;
        const existingAdminPermission = await User.findOne({ where: { name } });
        if (existingAdminPermission) {
            return res.status(400).json({ message: 'Username already in use' });
        }
        const newPermission = await Permission.create({ name });

        res.status(201).json({
            message: "User added successfully",
            user: {
                name: newPermission.name,
            }
        });
    },
    findAdminPermissionAccess: async (req, res, next) => {
        const currentPermissionAccessId = req.params.id;
        const permissions = await Permission.findAll({
            include: [
                {
                    model: Permission,
                    where: { id: currentPermissionAccessId }, // This applies the WHERE condition on Users
                    required: true // Ensures that the JOIN behaves as an INNER JOIN
                }
            ]
        });
        res.status(200).json(permissions);
    },
    deleteAdminPermissionAccess: async (req, res, next) => {
        try {
            const permissionId = req.params.id;
            const result = await Permission.destroy({
                where: { id: permissionId }
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
    editAdminPermissionAccess: async (req, res, next) => {
        try {
            const permissionId = req.params.id;
            const permissionData = req.body;

            // Check if permissionData is valid
            if (!permissionData || !permissionData.name) {
                return res.status(400).json({
                    status: 400,
                    statustext: 'Bad Request',
                    message: 'Invalid user data',
                });
            }

            // Update user
            const [updated] = await User.update(permissionData, {
                where: { id: permissionId }
            });

            if (updated) {
                const updatedUser = await User.findByPk(permissionId);
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


    //USERS
    findUser: async (req, res, next) => {
        try {
            const currentUserId = req.params.id;

            const posts = await Post.findAll({
                include: [
                    {
                        model: User,
                        where: { id: currentUserId }, // This applies the WHERE condition on Users
                        required: true // Ensures that the JOIN behaves as an INNER JOIN
                    }
                ]
            });
            res.status(200).json(posts);
        } catch (error) {
            console.log(error)
            res.status(500).send();
        }
    },
    findAllUser: async (req, res, next) => {
        try {
            const usersWithPosts = await Post.findAll({
                include: [{
                    model: User,
                    required: true // Ensures that only posts with associated users are returned
                }],
                logging: console.log // Log the raw SQL query to the console
            });
            res.status(200).json(usersWithPosts);
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

    //Change user role
    changeUserRole: async (req, res, next) => { },

    //Change user permission
    changeUserPermission: async (req, res, next) => { },

}