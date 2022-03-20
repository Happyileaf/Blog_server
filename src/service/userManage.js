/*
 * @Author: your name
 * @Date: 2022-03-20 17:12:36
 * @LastEditTime: 2022-03-20 18:02:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\service\userManage.js
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const UserManage = require('../model/user')

class UserManageService {
    async createUser(user) {
        console.log('user')
        console.log(user)
        // 因为mysql不支持数组类型，在sequelize中重写了get和set
        // 在写入前先从字符串转为数组
        user.roles = user.roles.split(",")
        const res = await UserManage.create(user)
        return res.dataValues
    }

    async updateUser(user_id, user) {
        console.log('user')
        console.log(user)
        user.roles = user.roles.split(",")
        const res = await UserManage.update(user, { where: { user_id } })
        return res[0] > 0 ? true : false
    }

    async removeUser(id) {
        const res = await UserManage.destroy({ where: { id } })

        return res > 0 ? true : false
    }

    async restoreUser(id) {
        const res = await UserManage.restore({ where: { id } })

        return res > 0 ? true : false
    }

    async findUserList(fetchQuery) {
        // // 1. 获取总数
        // const count = await UserManage.count()
        // // console.log(count)
        // // 2. 获取分页的具体数据
        // const offset = (pageNum - 1) * pageSize
        // const rows = await UserManage.findAll({ offset: offset, limit: pageSize * 1 })

        const { pageNum, pageSize, user_id, user_name, status } = fetchQuery
        const whereOpt = {}

        user_id && Object.assign(whereOpt, { user_id: { [Op.like]: `%${user_id}%` } })
        user_name && Object.assign(whereOpt, { user_name: { [Op.like]: `%${user_name}%` } })
        status && Object.assign(whereOpt, { status: { [Op.eq]: status } })

        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await UserManage.findAndCountAll({
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

    async findUserById(user_id) {
        const whereOpt = {}

        user_id && Object.assign(whereOpt, { user_id })
        console.log(whereOpt)
        const res = await UserManage.findOne({
            attributes: ['user_id', 'user_name', 'password', 'roles', 'email', 'status'],
            where: whereOpt,
        })

        return res ? res.dataValues : null
    }

    async deleteUser(user_id) {
        const res = await UserManage.destroy({ where: { user_id } })
        if (res) {
            return res
        } else {
            console.log('要删除的用户不存在')
        }
    }
}

module.exports = new UserManageService()