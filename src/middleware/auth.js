const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const SECRET_KEY = process.env.SECRET_KEY || '2025jwtdev';
dotenv.config();

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, autorizacion denegada' });
    }
    try {
        const verificar = jwt.verify(token, SECRET_KEY);
        req.user = verificar.user;
        next();
    } catch (err) {
        res.status(401).json({msg:"el token no es valido"});
    }
};

module.exports = auth;