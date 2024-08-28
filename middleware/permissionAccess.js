const { User, Permission, Role } = require('../models');

module.exports = async (req, res, next) => {
    console.log("body name", req.body.name);
    console.log("user id", req.user)
    try {
        const currentId = req.user.id;

        Role.findAll({
            include: [{
                model: User,
                where: { id: currentId },
                attributes: []
            }],
            attributes: ['id', 'name']
        })
            .then(roles => {
                const roleNames = roles.map(role => role.name);
                if (roleNames[0] == 'Admin') {
                    const roleId = roles.map(role => role.id);
                    Permission.findAll({
                        include: [{
                            model: Role,
                            where: { id: roleId },
                            attributes: []
                        }],
                        attributes: ['name']
                    })
                        .then(permissions => {
                            const permissionsNames = permissions.map(permissions => permissions.name);
                            if (permissionsNames[0] == 'Create') {
                                next();
                            } else {
                                console.log('Not Access')
                            }
                        })
                        .catch(error => {
                            console.error('Error fetching permissionss:', error);
                        });
                } else {
                    console.log('Not Access')
                }
            })
            .catch(error => {
                console.error('Error fetching roles:', error);
            });




    } catch (error) {
        console.log("error", error);
    }

}