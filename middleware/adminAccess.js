const { User, Role, Post, Permission, UserRole } = require('../models');

module.exports = async (req, res, next) => {
    console.log("body name", req.body.name);
    console.log("user id", req.user)
    try {
        const currentId = req.user.id;

        Role.findAll({
            include: [{
                model: User, // The join model (user_role)
                where: { id: currentId }, // Condition to filter by userId
                attributes: [] // Exclude attributes from the join table
            }],
            attributes: ['name'] // Only select the 'name' field from the Roles table
        })
            .then(roles => {
                const roleNames = roles.map(role => role.name); // Extract the role names
                if(roleNames[0]=='Admin'){
                    next()
                }else{
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