/*
 * @Author: your name
 * @Date: 2022-03-16 20:23:52
 * @LastEditTime: 2022-03-24 17:41:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\tag.js
 */

const {
    findTagList,
    findTagById,
    createTag,
    updateTag,
    deleteTag } = require('../service/tag')

const {
    TagListFetchError,
    TagFetchError,
    TagCreateError,
    TagUpdateError,
    TagDeleteError

} = require('../constant/errType/err.tag')

class TagController {
    async fetchList(ctx, next) {
        try {
            const res = await findTagList(ctx.request.query)
            console.log(res)
            ctx.body = {
                code: 0,
                message: '列表查询成功',
                result: res
            }
        } catch (err) {
            console.log('列表查询失败')
            console.error(err)
            ctx.app.emit('error', TagListFetchError, ctx)
        }
    }
    async fetchTag(ctx, next) {
        const { tag_id } = ctx.request.query
        try {
            const res = await findTagById(tag_id)
            ctx.body = {
                code: 0,
                message: '标签查询成功',
                result: res
            }
        } catch (err) {
            console.log('标签查询失败')
            console.error(err)
            ctx.app.emit('error', TagFetchError, ctx)
        }
    }
    async create(ctx, next) {
        try {
            ctx.request.body.status = ctx.request.body.status + ''
            const res = await createTag(ctx.request.body)
            ctx.body = {
                code: 0,
                message: '标签创建成功',
                result: res
            }
        } catch (err) {
            console.log('标签创建失败')
            console.error(err)
            ctx.app.emit('error', TagCreateError, ctx)
        }
    }
    async update(ctx, next) {
        const { tag_id, ...query } = ctx.request.body
        let id = Number(tag_id)
        // query.rank && (query.rank = Number(query.rank))
        try {
            const res = await updateTag(id, query)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '标签更新成功',
                    result: res
                }
            } else {
                console.log('标签更新失败')
            }
        } catch (err) {
            console.log('标签更新失败')
            console.error(err)
            ctx.app.emit('error', TagUpdateError, ctx)
        }
    }
    async destroy(ctx, next) {
        console.log('ctx')
        console.log(ctx)
        console.log(ctx.params.tag_id)

        try {
            const res = deleteTag(ctx.params.tag_id)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '标签删除成功',
                    result: res
                }
            } else {

            }
        } catch (err) {
            console.log('标签删除失败')
            console.error(err)
            ctx.app.emit('error', TagDeleteError, ctx)
        }
    }
}

module.exports = new TagController()