const { User, Post, Role, Permission } = require('../models/index');

module.exports = {
    createAdminRoleAccess: async (req, res, next) => {
        const { name } = req.body;
        const existingAdminRole = await User.findOne({ where: { name } });
        if (existingAdminRole) {
            return res.status(400).json({ message: 'Username already in use' });
        }
        const newRole = await Role.create({ name });

        res.status(201).json({
            message: "User added successfully",
            user: {
                name: newRole.name,
            }
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
}