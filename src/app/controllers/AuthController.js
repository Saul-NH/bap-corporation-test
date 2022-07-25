import AuthService from '../../libs/services/auth.service';
const authService = new AuthService();

class AuthController {
    constructor() {

    }

    async login(req, res) {
        try {
            const token = await authService.login(req.body);
            return res.json(token);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    }
}

export default AuthController;
