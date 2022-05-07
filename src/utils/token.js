/*
 * @Author: your name
 * @Date: 2022-03-16 14:17:20
 * @LastEditTime: 2022-04-08 10:13:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\utils\token.js
 */

const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_EXPIRESIN } = require('../../config/config.default')
const expiresIn = JWT_EXPIRESIN || 60 * 60 * 24 * 7
const jwt_secret = JWT_SECRET || "123456"
// 签名
function sign(payload, options = {}) {
    const token = jwt.sign(payload, jwt_secret, Object.assign({
        expiresIn: expiresIn // 设置过期时间
    }, options))
    return token
}
//验证
function verify(token) {
    return jwt.verify(token, jwt_secret)
}
module.exports = {
    jwt_secret,
    sign,
    verify
}



