const AuthSevice = require('../services/auth.service');

class AuthController {
    static async register(req, res) {
        try{            
            const { username, email, role, password } = req.body;
            
            const result = await AuthSevice.register({username, email, role, password});
            return res.status(201).json(result);
        }catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async login(req, res) {
        try {
            
            const { email, password } = req.body;
            const result = await AuthSevice.login({email, password});
            return res.status(200).json(result);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }
}
module.exports = AuthController;