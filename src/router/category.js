/*
 * @Author: your name
 * @Date: 2022-03-16 16:56:52
 * @LastEditTime: 2022-03-17 14:39:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\router\category.js
 */

const Router = require('koa-router')

const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
} = require('../middleware/user.middleware')

const { auth, hadAdminPermission } = require('../middleware/auth.middleware')

const {
  fetchList,
  fetchCategory,
  create,
  update,
  destroy
} = require('../controller/category')

const router = new Router({ prefix: '/user' })

// 获取分类列表
router.get('/fetchList', auth, fetchList)

// 获取指定分类
router.get('/fetchCategory', auth, fetchCategory)

// 新建分类
router.post('/create', auth, hadAdminPermission, create)

// 更新分类
router.post('/update', auth, hadAdminPermission, update)

// 激活或冻结分类
router.post('/activateOrFreeze', auth, hadAdminPermission, update)

// 删除分类
router.delete('/delete/:category_id', auth, hadAdminPermission, destroy)

module.exports = router
