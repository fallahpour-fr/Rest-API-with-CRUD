const { User, Role } = require('../models');

module.exports = async (req, res, next) => {
    try {
        if(!req.use){
            return res.status(401).json({ message: 'Access denied. No token provided.' });   
        }
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
                    next();
                }else{
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