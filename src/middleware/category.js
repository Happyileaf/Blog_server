/*
 * @Author: your name
 * @Date: 2022-03-16 19:30:07
 * @LastEditTime: 2022-03-18 14:05:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\middleware\category.js
 */

const { getCategoryInfo } = require('../service/user')

const {
  CategoryFetchError,
  CategoryNameNullError,
  CategoryURLNullError,
  CategoryStatusNullError,
  CategoryAlreadyExited,
  CategoryCreateError
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
    ctx.app.emit('error', CategoryNameNullError, ctx)
    return
  }
  if (!category_url) {
    console.error('分类URL为空', ctx.request.body)
    ctx.app.emit('error', CategoryURLNullError, ctx)
    return
  }
  if (!status) {
    console.error('分类状态为空', ctx.request.body)
    ctx.app.emit('error', CategoryStatusNullError, ctx)
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
      ctx.app.emit('error', CategoryAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取分类信息错误', ctx.request.body)
    ctx.app.emit('error', CategoryFetchError, ctx)
    return
  }

  await next()
}

module.exports = {
  categoryValdator,
  verifyCategory
}
