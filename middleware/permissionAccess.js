const { User, Permission, Role } = require('../models');

module.exports = async (req, res, next) => {
    try {
        if(!req.use){
            return res.status(401).json({ message: 'Access denied. No token provided.' });   
        }
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
                                return res.status(401).json({ message: 'Access denied. No token provided.' }); 
                            }
                        })
                        .catch(error => {
                            console.error('Error fetching permissionss:', error);
                        });
                } else {
                    return res.status(401).json({ message: 'Access denied. No token provided.' }); 
                }
            })
            .catch(error => {
                console.error('Error fetching roles:', error);
            });




    } catch (error) {
        console.log("error", error);
    }

}