/*
 * @Author: your name
 * @Date: 2022-03-21 16:56:06
 * @LastEditTime: 2022-03-25 16:01:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\preset\recommendationNav.js
 */

const {
    findRecommendationNavList,
    createRecommendationNav,
    deleteRecommendationNav } = require('../../service/preset/RecommendationNav')

const {
    RecommendationNavListFetchError,
    RecommendationNavCreateError,
    RecommendationNavDeleteError
} = require('../../constant/errType/err.RecommendationNav')

class RecommendationNavController {
    async fetchNavList(ctx, next) {
        try {
            const res = await findRecommendationNavList(ctx.request.query)
            console.log(res)
            ctx.body = {
                code: 0,
                message: '推荐导航查询成功',
                result: res
            }
        } catch (err) {
            console.log('推荐导航查询失败')
            console.error(err)
            ctx.app.emit('error', RecommendationNavListFetchError, ctx)
        }
    }
    async createNav(ctx, next) {
        try {
            console.log(ctx.request.body)
            const res = await createRecommendationNav(ctx.request.body)
            ctx.body = {
                code: 0,
                message: '推荐导航创建成功',
                result: res
            }
        } catch (err) {
            console.log('推荐导航创建失败')
            console.error(err)
            ctx.app.emit('error', RecommendationNavCreateError, ctx)
        }
    }
    async destroyNav(ctx, next) {
        try {
            const res = deleteRecommendationNav(ctx.params.nav_id)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '推荐导航删除成功',
                    result: res
                }
            } else {

            }
        } catch (err) {
            console.log('推荐导航删除失败')
            console.error(err)
            ctx.app.emit('error', RecommendationNavDeleteError, ctx)
        }
    }
}

module.exports = new RecommendationNavController()