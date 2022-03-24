/*
 * @Author: your name
 * @Date: 2022-03-16 20:23:52
 * @LastEditTime: 2022-03-24 17:00:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\category.js
 */

const {
    findCategoryList,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory } = require('../service/category')

const {
    CategoryListFetchError,
    CategoryFetchError,
    CategoryCreateError,
    CategoryUpdateError,
    CategoryDeleteError
} = require('../constant/errType/err.category')

class CategoryController {
    async fetchList(ctx, next) {
        try {
            console.log(ctx.request.query)
            const res = await findCategoryList(ctx.request.query)
            
            ctx.body = {
                code: 0,
                message: '列表查询成功',
                result: res
            }
        } catch (err) {
            console.log('列表查询失败')
            console.error(err)
            ctx.app.emit('error', CategoryListFetchError, ctx)
        }
    }
    async fetchCategory(ctx, next) {
        const { category_id } = ctx.request.query
        try {
            const res = await findCategoryById(category_id)
            ctx.body = {
                code: 0,
                message: '分类查询成功',
                result: res
            }
        } catch (err) {
            console.log('分类查询失败')
            console.error(err)
            ctx.app.emit('error', CategoryFetchError, ctx)
        }
    }
    async create(ctx, next) {
        try {
            ctx.request.body.status = ctx.request.body.status + ''
            const res = await createCategory(ctx.request.body)
            ctx.body = {
                code: 0,
                message: '分类创建成功',
                result: res
            }
        } catch (err) {
            console.log('分类创建失败')
            console.error(err)
            ctx.app.emit('error', CategoryCreateError, ctx)
        }
    }
    async update(ctx, next) {
        ctx.request.body.status = ctx.request.body.status + ''
        const { category_id, ...query } = ctx.request.body
        let id = Number(category_id)
        // query.rank && (query.rank = Number(query.rank))
        try {
            const res = await updateCategory(id, query)
            console.log('test')
            console.log(res)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '分类更新成功',
                    result: res
                }
            } else {
                console.log('分类更新失败')
            }
        } catch (err) {
            console.log('分类更新失败')
            console.error(err)
            ctx.app.emit('error', CategoryUpdateError, ctx)
        }
    }
    async destroy(ctx, next) {
        try {
            const res = deleteCategory(ctx.params.category_id)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '分类删除成功',
                    result: res
                }
            } else {

            }
        } catch (err) {
            console.log('分类删除失败')
            console.error(err)
            ctx.app.emit('error', CategoryDeleteError, ctx)
        }
    }
}

module.exports = new CategoryController()