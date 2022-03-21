/*
 * @Author: your name
 * @Date: 2022-03-21 16:53:52
 * @LastEditTime: 2022-03-21 18:01:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\preset\carouselPicture.js
 */

const {
    findCarouselPictureList,
    createCarouselPicture,
    deleteCarouselPicture } = require('../../service/preset/carouselPicture')

const {
    carouselPictureListFetchError,
    carouselPictureCreateError,
    carouselPictureDeleteError
} = require('../../constant/errType/err.carouselPicture')

class carouselPictureController {
    async fetchPictureList(ctx, next) {
        try {
            const res = await findCarouselPictureList(ctx.request.query)
            console.log(res)
            ctx.body = {
                code: 0,
                message: '轮播图图片查询成功',
                result: res
            }
        } catch (err) {
            console.log('轮播图图片查询失败')
            console.error(err)
            ctx.app.emit('error', carouselPictureListFetchError, ctx)
        }
    }
    async createPicture(ctx, next) {
        try {
            const res = await createCarouselPicture(ctx.request.body)
            ctx.body = {
                code: 0,
                message: '轮播图图片创建成功',
                result: res
            }
        } catch (err) {
            console.log('轮播图图片创建失败')
            console.error(err)
            ctx.app.emit('error', carouselPictureCreateError, ctx)
        }
    }
    async destroyPicture(ctx, next) {
        try {
            const res = deleteCarouselPicture(ctx.params.picture_id)
            if (res) {
                ctx.body = {
                    code: 0,
                    message: '轮播图图片删除成功',
                    result: res
                }
            } else {

            }
        } catch (err) {
            console.log('轮播图图片删除失败')
            console.error(err)
            ctx.app.emit('error', carouselPictureDeleteError, ctx)
        }
    }
}

module.exports = new carouselPictureController()