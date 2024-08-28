const { User, Role, Post, Permission, UserRole } = require('../models');

module.exports = async (req, res, next) => {
    console.log("body name", req.body.name);
    console.log("user id", req.user.id)
    try {
        const currentId = req.user.id;
        Role.findAll({
            include: [{
                model: User,
                where: { id: currentId },
                attributes: []
            }],
            attributes: ['name']
        })
            .then(roles => {
                console.log(roles)
                if (roles.length > 0) {
                    const roleNames = roles.map(role => role.name);
                    console.log(roleNames); // Output: ['Admin', 'Editor']
                } else {
                    console.log('No role found for this user.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    } catch (error) {
        console.log("error", error);
    }

}