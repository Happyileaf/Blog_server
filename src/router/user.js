/*
 * @Author: your name
 * @Date: 2022-03-15 16:28:12
 * @LastEditTime: 2022-03-16 10:39:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\router\user.js
 */

const Router = require('koa-router')

const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
} = require('../middleware/user.middleware')

// const { auth } = require('../middleware/auth.middleware')

const {
  register,
  login,
  resetPassword,
} = require('../controller/user')

const router = new Router({ prefix: '/user' })

// 注册接口
router.post('/register', userValidator, verifyUser, register)

// 登录接口
router.post('/login', userValidator, verifyLogin, login)

// 修改密码接口
router.post('/resetPassword', resetPassword)

module.exports = router
