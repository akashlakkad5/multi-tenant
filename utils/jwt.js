const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');

exports.createToken = ({payload}) => {
    return jwt.sign(payload, process.env.TOKEN_SECRET,{
        expiresIn: process.env.TOKEN_EXPIR
    })
}


exports.verifyToken = ({token}) => {
    return jwt.verify(token, process.env.TOKEN_SECRET)
};