const { validationResult } = require('express-validator');
const AuthSevice = require('../services/auth.service');

class AuthController {
    static async register(req, res) {
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { username, email, password } = req.body;
            
            const result = await AuthSevice.register(username, email, password);
            return res.status(201).json(result);
        }catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
module.exports = AuthController;