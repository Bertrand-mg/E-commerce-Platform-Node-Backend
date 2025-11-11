const bcrypt = require("bcrypt");
const { User } = require('../../models');

class AuthSevice {
    static async register(username, email, password ) {
        
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
}

module.exports = AuthSevice;