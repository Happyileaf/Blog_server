/*
 * @Author: your name
 * @Date: 2022-03-15 16:33:09
 * @LastEditTime: 2022-03-16 14:51:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\user.js
 */
const jwt = require('jsonwebtoken')

const {
  createUser,
  getUerInfo,
  updateById,
} = require('../service/user')

const { userRegisterError } = require('../constant/err.type')

const { sign, verify } = require('../utils/token')

class UserController {
  async register(ctx, next) {
    const { user_name, password, roles, email, status } = ctx.request.body

    try {
      const res = await createUser(user_name, password, roles, email, status)
      // console.log(res)
      // 3. 返回结果
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name,
        },
      }
    } catch (err) {
      console.log(err)
      ctx.app.emit('error', userRegisterError, ctx)
    }
  }

  async login(ctx, next) {
    const { user_name } = ctx.request.body

    // 1. 获取用户信息(在token的payload中, 记录id, user_name, is_admin)
    try {
      // 从返回结果对象中剔除password属性, 将剩下的属性放到res对象
      const { password, ...res } = await getUerInfo({ user_name })
      console.log(res)

      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          token: sign(res, { expiresIn: '1d' }),
        },
      }
    } catch (err) {
      console.error('用户登录失败', err)
    }
  }

  async resetPassword(ctx, next) {
    // 1. 获取数据
    const user_id = ctx.state.user.user_id
    const password = ctx.request.body.password

    // 2. 操作数据库
    if (await updateById({ user_id, password })) {
      ctx.body = {
        code: 0,
        message: '修改密码成功',
        result: '',
      }
    } else {
      ctx.body = {
        code: '10007',
        message: '修改密码失败',
        result: '',
      }
    }
    // 3. 返回结果
  }
}

module.exports = new UserController()
