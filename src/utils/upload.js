/*
 * @Author: your name
 * @Date: 2022-03-18 17:23:52
 * @LastEditTime: 2022-03-18 17:25:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\utils\upload.js
 */

const path = require('path')

const baseURL = 'http://localhost:8000'

const upload = (ctx, next) => {
    // console.log(ctx.request.files)
    const { file } = ctx.request.files
    // console.log(file)
    const fileTypes = ['image/jpeg', 'image/png']
    if (file) {
      if (!fileTypes.includes(file.type)) {
        return ctx.app.emit('error', unSupportedFileType, ctx)
      }
      ctx.body = {
        code: 0,
        message: '商品图片上传成功',
        result: {
          goods_img: `${baseURL}/${path.basename(file.path)}`,
        },
      }
    } else {
      return ctx.app.emit('error', fileUploadError, ctx)
    }
  }

  module.exports = {
      upload
  }