/*
 * @Author: your name
 * @Date: 2022-03-20 17:01:10
 * @LastEditTime: 2022-03-20 18:06:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\userManage.js
 */

const {
    findUserList,
    findUserById,
    createUser,
    updateUser,
    deleteUser } = require('../service/userManage')

const {
    UserListFetchError,
    UserFetchError,
    UserCreateError,
    UserUpdateError,
    UserDeleteError
} = require('../constant/errType/err.user')

class UserManageController {
    async fetchList(ctx, next) {
        try {
            const res = await findUserList(ctx.request.query)
            console.log(res)
            ctx.body = {
                code: 0,
                message: '列表查询成功',
                result: res
            }
        } catch (err) {
            console.log('列表查询失败')
            console.error(err)
            ctx.app.emit('error', UserListFetchError, ctx)
        }
    }
    async fetchUser(ctx, next) {
        const { user_id } = ctx.request.query
        try {
            const res = await findUserById(user_id)
            ctx.body = {
                code: 0,
                message: '用户查询成功',
                result: res
            }
        } catch (err) {
            console.log('用户查询失败')
            console.error(err)
            ctx.app.emit('error', UserFetchError, ctx)
        }
    }
    async create(ctx, next) {
        try {
            const res = await createUser(ctx.request.body)
            ctx.body = {
                code: 0,
                message: '用户创建成功',
                result: res
            }
        } catch (err) {
            console.log('用户创建失败')
            console.error(err)
            ctx.app.emit('error', UserCreateError, ctx)
        }
    }
    async update(ctx, next) {
        const { user_id, ...query } = ctx.request.body
        let id = Number(user_id)
        try {
            const res = await updateUser(id, query)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '用户更新成功',
                    result: res
                }
            } else {
                console.log('用户更新失败')
            }
        } catch (err) {
            console.log('用户更新失败')
            console.error(err)
            ctx.app.emit('error', UserUpdateError, ctx)
        }
    }
    async destroy(ctx, next) {
        try {
            const res = deleteUser(ctx.params.user_id)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '用户删除成功',
                    result: res
                }
            } else {

            }
        } catch (err) {
            console.log('用户删除失败')
            console.error(err)
            ctx.app.emit('error', UserDeleteError, ctx)
        }
    }
}

module.exports = new UserManageController()