const jwt = require('jsonwebtoken');

class AuthMiddleware {
    static async Authenticate(req, res, next) {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'Access denied. No token provided.' });
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(400).json({ error: 'Invalid token.' });
        }
    }
    static Authorization(roles = []) {
        return (req, res, next) => {
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ error: 'Access denied. You do not have permission to perform this action.' });
            }
            next();
        };
    }
}

module.exports = AuthMiddleware;
