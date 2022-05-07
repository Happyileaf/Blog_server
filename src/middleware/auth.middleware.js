/*
 * @Author: your name
 * @Date: 2022-03-16 14:02:44
 * @LastEditTime: 2022-05-04 10:08:37
 * @LastEditors: happy 997401767@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\middleware\auth.middleware.js
 */
const jwt = require('jsonwebtoken')

const { sign, verify } = require('../utils/token')

const {
  tokenExpiredError,
  invalidToken,
  hasNotAdminPermission,
} = require('../constant/err.type')

const auth = async (ctx, next) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  if (token === 'visitor') {
    await next()
  } else {
    try {
      // user中包含了payload的信息(user_id, user_name, password, roles, email, status)
      const user = verify(token)
      ctx.state.user = user
    } catch (err) {
      switch (err.name) {
        case 'TokenExpiredError':
          console.error('token已过期', err)
          return ctx.app.emit('error', tokenExpiredError, ctx)
        case 'JsonWebTokenError':
          console.error('无效的token', err)
          return ctx.app.emit('error', invalidToken, ctx)
      }
    }
    await next()
  }

  
}




const hadAdminPermission = async (ctx, next) => {
  const { roles } = ctx.state.user
  console.log(roles)

  if (!roles.includes("admin")) {
    console.error('该用户没有管理员的权限', ctx.state.user)
    return ctx.app.emit('error', hasNotAdminPermission, ctx)
  }

  await next()
}

module.exports = {
  auth,
  hadAdminPermission,
}
