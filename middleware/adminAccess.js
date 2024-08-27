const { User, Role, Post, Permission, user_role } = require('../models');

module.exports = async (req, res, next) => {
    console.log("body name", req.body.name);
    console.log("user id", req.user.id)
    try {
        const currentId = req.user.id;

        Role.findAll({
            attributes: ['name'], 
            include: [{
              model: user_role,
              where: {
                userId: currentId
              },
              attributes: [] 
            }]
          }).then(roles => {
            console.log(roles);
          }).catch(error => {
            console.error('Error:', error);
          });

    } catch (error) {
        console.log("error", error);
    }

}