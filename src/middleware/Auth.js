const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';
const hash = require('bcryptjs');
dotenv.config();

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
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