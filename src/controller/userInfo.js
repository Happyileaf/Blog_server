/*
 * @Author: your name
 * @Date: 2022-03-27 16:29:18
 * @LastEditTime: 2022-05-08 11:56:33
 * @LastEditors: happy 997401767@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\userInfo.js
 */

const {
    findUserInfo,
    createUserInfo,
    updateUserInfo,
    deleteUserInfo } = require('../service/userInfo')

const {
    getUerInfo
} = require('../service/user')

const {
    UserInfoListFetchError,
    UserInfoFetchError,
    UserInfoCreateError,
    UserInfoUpdateError,
    UserInfoDeleteError
} = require('../constant/errType/err.user')

class UserInfoController {
    async fetchUserInfo(ctx, next) {
        const { user_id } = ctx.request.query
        try {
            let res = await findUserInfo(user_id)
            let { education, socialAccount, skills } = res
            education = JSON.parse(education)
            socialAccount = JSON.parse(socialAccount)
            skills = JSON.parse(skills)
            res = { ...res, education, socialAccount, skills }

            ctx.body = {
                code: 0,
                message: '用户查询成功',
                result: res
            }
        } catch (err) {
            console.log('用户查询失败')
            console.error(err)
            ctx.app.emit('error', UserInfoFetchError, ctx)
        }
    }
    async create(ctx, next) {
        try {
            const res = await createUserInfo(ctx.request.body)
            ctx.body = {
                code: 0,
                message: '用户创建成功',
                result: res
            }
        } catch (err) {
            console.log('用户创建失败')
            console.error(err)
            ctx.app.emit('error', UserInfoCreateError, ctx)
        }
    }
    async update(ctx, next) {
        let { user_id, ...query
        } = ctx.request.body

        const { education, socialAccount, skills } = query

        // console.log('JSON.stringify(education)')
        // console.log(JSON.stringify(skills))
        try {
            const res = await updateUserInfo(user_id, query)
            if (res) {
                // const { education, socialAccount, skills } = res
                // education = JSON.parse(education)
                // socialAccount = JSON.parse(socialAccount)
                // skills = JSON.parse(skills)
                // res = { education, socialAccount, skills, ...res }
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
            ctx.app.emit('error', UserInfoUpdateError, ctx)
        }
    }
    async destroy(ctx, next) {
        try {
            const res = deleteUserInfo(ctx.params.user_id)
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

module.exports = new UserInfoController()