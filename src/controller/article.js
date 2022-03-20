/*
 * @Author: your name
 * @Date: 2022-03-19 14:12:02
 * @LastEditTime: 2022-03-19 16:41:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\article.js
 */

const {
    findArticleList,
    findArticleById,
    createArticle,
    updateArticle,
    deleteArticle } = require('../service/article')

const {
    ArticleListFetchError,
    ArticleFetchError,
    ArticleCreateError,
    ArticleUpdateError,
    ArticleDeleteError
} = require('../constant/errType/err.article')

class ArticleController {
    async fetchList(ctx, next) {
        try {
            const res = await findArticleList(ctx.request.query)
            console.log(res)
            ctx.body = {
                code: 0,
                message: '列表查询成功',
                result: res
            }
        } catch (err) {
            console.log('列表查询失败')
            console.error(err)
            ctx.app.emit('error', ArticleListFetchError, ctx)
        }
    }
    async fetchArticle(ctx, next) {
        try {
            const { article_id } = ctx.request.query
            const res = await findArticleById(ctx.article_id)
            ctx.body = {
                code: 0,
                message: '文章查询成功',
                result: res
            }
        } catch (err) {
            console.log('列表查询失败')
            console.error(err)
            ctx.app.emit('error', ArticleListFetchError, ctx)
        }
    }
    async create(ctx, next) {
        try {
            const res = await createArticle(ctx.request.body)
            ctx.body = {
                code: 0,
                message: '文章创建成功',
                result: res
            }
        } catch (err) {
            console.log('列表查询失败')
            console.error(err)
            ctx.app.emit('error', ArticleListFetchError, ctx)
        }
    }
    async update(ctx, next) {
        const { article_id, ...query } = ctx.request.body
        let id = Number(article_id)
        try {
            const res = await updateArticle(id, query)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '文章更新成功',
                    result: res
                }
            } else {
                console.log('文章更新失败')
            }
        } catch (err) {
            console.log('列表查询失败')
            console.error(err)
            ctx.app.emit('error', ArticleListFetchError, ctx)
        }
    }
    async destroy(ctx, next) {
        try {
            const res = deleteArticle(ctx.params.article_id)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '文章删除成功',
                    result: res
                }
            } else {

            }
        } catch (err) {
            console.log('列表查询失败')
            console.error(err)
            ctx.app.emit('error', ArticleListFetchError, ctx)
        }
    }
}

module.exports = new ArticleController