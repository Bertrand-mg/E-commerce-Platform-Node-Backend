const bcrypt = require("bcrypt");
const { User } = require('../../models');
const { generateToken } = require('../utils/jwt.util');

class AuthSevice {
    static async register({ username, email, password }) {
        
        const emailExists = await User.findOne({ where: { email } });
        if (emailExists) throw new Error('Email already exists');

        const usernameExists = await User.findOne({ where: { username } });
        if (usernameExists) throw new Error('Username already exists');

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            username,
            email,
            password: hashedPassword
        });
        
        return { message: 'User registered successfully' };
    }

    static async login({email, password}) {
        const user = await User.findOne({ where: { email } });
        if (!user) throw new Error('Invalid credentials');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Invalid credentials');
        
        // Generate JWT token
        const token = generateToken({ id: user.id, email: user.email });

        return { token };
    }
}

module.exports = AuthSevice;