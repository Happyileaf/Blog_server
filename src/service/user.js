/*
 * @Author: your name
 * @Date: 2022-03-15 16:35:04
 * @LastEditTime: 2022-03-16 10:05:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\service\user.js
 */
const User = require('../model/user')

class UserService {
  async createUser(user_name, password, roles, email, status) {
    // 插入数据

    // 因为mysql不支持数组类型，在sequelize中重写了get和set
    // 在写入前先从字符串转为数组
    roles = roles.split(",")
    const res = await User.create({ user_name, password, roles, email, status })
    // console.log(res)
    return res.dataValues
  }

  async getUerInfo({ user_id, user_name, password, roles, email, status }) {
    const whereOpt = {}

    user_id && Object.assign(whereOpt, { user_id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    roles && Object.assign(whereOpt, { roles })
    email && Object.assign(whereOpt, { email })
    status && Object.assign(whereOpt, { status })

    const res = await User.findOne({
      attributes: ['user_id', 'user_name', 'password', 'roles', 'email', 'status'],
      where: whereOpt,
    })

    return res ? res.dataValues : null
  }

  async updateById({ user_id, user_name, password, roles, email, status }) {
    const whereOpt = { user_id }
    const newUser = {}

    user_name && Object.assign(newUser, { user_name })
    password && Object.assign(newUser, { password })
    roles && Object.assign(newUser, { roles })
    email && Object.assign(newUser, { email })
    status && Object.assign(newUser, { status })

    const res = await User.update(newUser, { where: whereOpt })
    // console.log(res)
    return res[0] > 0 ? true : false
  }
}

module.exports = new UserService()