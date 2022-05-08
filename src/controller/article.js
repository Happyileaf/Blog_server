/*
 * @Author: your name
 * @Date: 2022-03-19 14:12:02
 * @LastEditTime: 2022-05-08 11:53:41
 * @LastEditors: happy 997401767@qq.com
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
    findUserInfo,
    createUserInfo,
    updateUserInfo,
    deleteUserInfo } = require('../service/userInfo')

const {
    findCategoryList,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory } = require('../service/category')

const {
    findTagList,
    findTagById,
    createTag,
    updateTag,
    deleteTag } = require('../service/tag')
const {
    getUerInfo
} = require('../service/user')

const {
    ArticleListFetchError,
    ArticleFetchError,
    ArticleCreateError,
    ArticleUpdateError,
    ArticleDeleteError
} = require('../constant/errType/err.article')
const response = require('koa/lib/response')

class ArticleController {
    async fetchList(ctx, next) {
        try {
            const res = await findArticleList(ctx.request.query)
            let user_info, category_info, tags_info = []
            await Promise.all(
                res.list.map(async x => {
                    const { user_id, category_id, tag_ids } = x
                    let tags = JSON.parse(tag_ids)
                    // console.log('Array.isArray(tags)')
                    // console.log(Array.isArray(tags))
                    let user_info = await findUserInfo(user_id)
                    let category_info = await findCategoryById(category_id)
                    let tags_info = []

                    await Promise.all(
                        tags_info = tags.map(async x => {
                            // console.log('x')
                            // console.log(x)
                            let tep = await findTagById(x)
                            return tep
                        })).then(response => {
                            tags_info = response
                        });

                    return {
                        'article_info': x,
                        user_info,
                        category_info,
                        tags_info
                    }
                })
            ).then(response => {
                // console.log(response)
                res.list = response
            });

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
            const { id: article_id } = ctx.request.query
            const res = await findArticleById(article_id)
            const { user_id, category_id, tag_ids } = res
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
        ctx.request.body.status = ctx.request.body.status + ''
        ctx.request.body.tags_id = JSON.stringify(ctx.request.body.tags_id)
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