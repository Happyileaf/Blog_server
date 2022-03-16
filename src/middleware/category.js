/*
 * @Author: your name
 * @Date: 2022-03-16 19:30:07
 * @LastEditTime: 2022-03-16 20:09:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\middleware\category.js
 */

const { getCategoryInfo } = require('../service/user')

const {
  categoryNameNullError,
  categoryURLNullError,
  categoryStatusNullError,
  categoryAlreadyExited,
  categoryCreateError
} = require('../constant/errType/err.category')

const categoryValdator = async (ctx, next) => {
  const {
    category_name,
    category_url,
    rank,
    back_ground,
    icon,
    status
  } = ctx.request.body

  if (!category_name) {
    console.error('分类名称为空', ctx.request.body)
    ctx.app.emit('error', categoryNameNullError, ctx)
    return
  }
  if (!category_url) {
    console.error('分类URL为空', ctx.request.body)
    ctx.app.emit('error', categoryURLNullError, ctx)
    return
  }
  if (!status) {
    console.error('分类状态为空', ctx.request.body)
    ctx.app.emit('error', categoryStatusNullError, ctx)
    return
  }
  
  await next()
}

const verifyCategory = async (ctx, next) => {
  const { category_name } = ctx.request.body
  try {
    const res = await getCategoryInfo({ category_name })
    if (res) {
      console.error('分类已经存在', { category_name })
      ctx.app.emit('error', categoryAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取分类信息错误', ctx.request.body)
    ctx.app.emit('error', categoryCreateError, ctx)
    return
  }

  await next()
}

module.exports = {
  categoryValdator,
  verifyCategory
}
