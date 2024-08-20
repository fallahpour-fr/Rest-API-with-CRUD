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
        console.log("decoded",decoded)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};
