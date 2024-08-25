// middleware/auth.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; // Use environment variables in production

module.exports = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log("token", token)
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // const decoded = jwt.verify(token, SECRET_KEY);
    // console.log("decoded",decoded)

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log("decoded", decoded)
        req.user = decoded;

        // بازیابی کاربر از دیتابیس
        // const user = await User.findByPk(req.user.id, {
        //     include: [Role, Permission] // بارگذاری نقش‌ها و مجوزها
        // });

        // if (!user) {
        //     return res.status(401).json({ message: 'User not found.' });
        // }
        // // بررسی نقش کاربر
        // if (requiredRole && !user.Roles.some(role => role.name === requiredRole)) {
        //     return res.status(403).json({ message: 'Access denied. You do not have the required role.' });
        // }

        // // بررسی مجوز کاربر
        // if (requiredPermission && !user.Permissions.some(permission => permission.name === requiredPermission)) {
        //     return res.status(403).json({ message: 'Access denied. You do not have the required permission.' });
        // }


        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
}