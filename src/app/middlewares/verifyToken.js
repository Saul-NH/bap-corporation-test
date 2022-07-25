import jwt from 'jsonwebtoken';
import moment from 'moment';
import config from 'config';


export const  verifyToken = ( req, res, next ) => {
    if (!req.headers['user-token']) {
        return res.status(401).json({ error: 'Unauthenticated user'})
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, config.get('secret'));
    } catch (error) {
        return res.status(401).json({ error : 'Wrong token'})
    }

    if (payload === null) {
        return res.status(401).json({ error : 'Wrong token'})
    }

    if (payload.expiredAt < moment().unix()) {
        console.log(payload.createdAt+"/"+moment().unix());
        return res.json({ message : 'La session ha expirado'});
    }

    req.user_id = payload.user_id;

    next();
}