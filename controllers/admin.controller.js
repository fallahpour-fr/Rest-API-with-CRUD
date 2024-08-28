const { User, Post, Role, Permission } = require('../models/index');

module.exports = {

    //AdminRole
    createAdminRoleAccess: async (req, res, next) => {
        console.log('createAdminRoleAccess')
        const { name } = req.body;

        const createdRole = await Role.create({ name });

        res.status(201).json({
            message: "Role added successfully",
            createdRole
        });
    },
    // deleteAdminRoleAccess: async (req, res, next) => {
    //     try {
    //         const roleId = req.params.id;
    //         const result = await Role.destroy({
    //             where: { id: roleId }
    //         });

    //         if (result) {
    //             res.status(200).json({
    //                 status: 200,
    //                 statustext: 'Delete',
    //                 message: 'User deleted successfully'
    //             });
    //         } else {
    //             res.status(404).json({
    //                 status: 404,
    //                 statustext: 'Not Found',
    //                 message: 'User not found'
    //             });
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send();
    //     }
    // },
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
            const [updated] = await Role.update(roleData, {
                where: { id: roleId }
            });

            if (updated) {
                const updatedRole = await Role.findByPk(roleId);
                res.status(200).json({
                    status: 200,
                    statustext: 'Ok',
                    message: 'User updated successfully',
                    data: updatedRole,
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
        const newPermission = await Permission.create({ name });

        res.status(201).json({
            message: "Permissin added successfully",
            user: {
                name: newPermission.name,
            }
        });
    },
    // deleteAdminPermissionAccess: async (req, res, next) => {
    //     try {
    //         const permissionId = req.params.id;
    //         const result = await Permission.destroy({
    //             where: { id: permissionId }
    //         });

    //         if (result) {
    //             res.status(200).json({
    //                 status: 200,
    //                 statustext: 'Delete',
    //                 message: 'User deleted successfully'
    //             });
    //         } else {
    //             res.status(404).json({
    //                 status: 404,
    //                 statustext: 'Not Found',
    //                 message: 'User not found'
    //             });
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send();
    //     }
    // },
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
            const [updated] = await Permission.update(permissionData, {
                where: { id: permissionId }
            });

            if (updated) {
                const updatedPermission = await Permission.findByPk(permissionId);
                res.status(200).json({
                    status: 200,
                    statustext: 'Ok',
                    message: 'Permission updated successfully',
                    data: updatedPermission,
                });
            } else {
                res.status(404).json({
                    status: 404,
                    statustext: 'Not Found',
                    message: 'Permission not found',
                });
            }
        } catch (error) {
            next(error);
        }
    },


    //Users
    findUser: async (req, res, next) => {
        try {
            const currentUserId = req.params.id;

            const users = await User.findAll({
                where: { id: currentUserId }
            });
            res.status(200).json(users);
        } catch (error) {
            console.log(error)
            res.status(500).send();
        }
    },
    findAllUser: async (req, res, next) => {
        try {
            const allUser = await User.findAll({});
            res.status(200).json(allUser);
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

}