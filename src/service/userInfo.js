/*
 * @Author: your name
 * @Date: 2022-03-27 16:39:06
 * @LastEditTime: 2022-05-08 00:20:47
 * @LastEditors: happy 997401767@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\service\userInfo.js
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const UserInfo = require('../model/userInfo')

class UserInfoService {
    async createUserInfo(userInfo) {
        // 因为mysql不支持数组类型，在sequelize中重写了get和set
        // 在写入前先从字符串转为数组
        // user.roles = user.roles.split(",")
        const res = await UserInfo.create(userInfo)
        return res.dataValues
    }

    async updateUserInfo(user_id, userInfo) {
        console.log('user')
        // user.roles = ['user']
        console.log(userInfo)
        // user.roles = user.roles.split(",")
        const res = await UserInfo.update(userInfo, { where: { user_id } })
        return res[0] > 0 ? true : false
    }

    async removeUserInfo(id) {
        const res = await UserInfo.destroy({ where: { id } })

        return res > 0 ? true : false
    }

    async restoreUserInfo(id) {
        const res = await UserInfo.restore({ where: { id } })

        return res > 0 ? true : false
    }

    async findUserInfoList(fetchQuery) {
        // // 1. 获取总数
        // const count = await UserInfo.count()
        // // console.log(count)
        // // 2. 获取分页的具体数据
        // const offset = (pageNum - 1) * pageSize
        // const rows = await UserInfo.findAll({ offset: offset, limit: pageSize * 1 })
        console.log('fetchQuery')
        console.log(fetchQuery)
        const { pageNum, pageSize, user_id, user_name, roles, email, status } = fetchQuery
        const whereOpt = {}

        user_id && Object.assign(whereOpt, { user_id: { [Op.like]: `%${user_id}%` } })
        user_name && Object.assign(whereOpt, { user_name: { [Op.like]: `%${user_name}%` } })
        roles && Object.assign(whereOpt, { roles: { [Op.like]: `%${roles}%` } })
        email && Object.assign(whereOpt, { email: { [Op.like]: `%${email}%` } })
        status && Object.assign(whereOpt, { status: { [Op.eq]: status } })
        console.log('whereOpt')
        console.log(whereOpt)
        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await UserInfo.findAndCountAll({
            where: whereOpt,
            offset: offset,
            limit: pageSize * 1,
        })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows,
        }
    }

    async findUserInfo(user_id) {
        const whereOpt = {}

        user_id && Object.assign(whereOpt, { user_id })
        console.log(whereOpt)
        const res = await UserInfo.findOne({
            // attributes: ['user_id', 'user_name', 'password', 'roles', 'email', 'status'],
            where: whereOpt,
        })
        console.log('userinfo res')
        // console.log(res)
        return res ? res.dataValues : null
    }

    async deleteUserInfo(user_id) {s
        const res = await UserInfo.destroy({ where: { user_id } })
        if (res) {
            return res
        } else {
            console.log('要删除的用户不存在')
        }
    }
}

module.exports = new UserInfoService()