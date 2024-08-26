const { User, Role, Post, Permission, UserRole } = require('../models');

module.exports = async (req, res, next) => {
    console.log("body name", req.body.name);
    console.log("user id", req.user.id)
    try {
        const currentId = req.user.id;

        Role.findAll({
            attributes: ['name'],
            include: [{
                model: UserRole,
                where: {
                    user_id: currentId
                }
            }]
        }).then(roles => {
            console.log(roles);
            if (roles == "Admin") {
                console.log("accessebale")
                next();
            } else {
                console.log("error")
            }
        });

    } catch (error) {
        console.log("error", error);
    }

}