import { User } from '../database/database';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';

class AuthService {
    constructor() {}

    async login(body) {
        try {
            const { email, password } = body;
            const user = await User.findOne({ where: { email } });
            if (user) {
                const equals = bcrypt.compareSync(password, user.password);

                if (equals) {
                    const token = this.createToken(user);
                    return token;
                } else {
                    return 'Email and/or password error';
                }
            } else {
                return 'The user has not been registered or there is an error in email and/or password'
            }
        } catch (error) {
            console.error(error);
        }
    }

    createToken = (user) => {
        const payload = {
            user_id: user.id,
        };
        return jwt.sign(payload, config.get('secret'), { expiresIn: '1h' });
    };
}

export default AuthService;
