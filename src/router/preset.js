/*
 * @Author: your name
 * @Date: 2022-03-21 16:47:08
 * @LastEditTime: 2022-03-21 17:23:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\router\preset.js
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
  fetchPictureList,
  createPicture,
  destroyPicture,
} = require('../controller/preset/carouselPicture')

const {
  fetchNavList,
  createNav,
  destroyNav,
} = require('../controller/preset/recommendationNav')

const router = new Router({ prefix: '/preset' })

// 获取分类列表
router.get('/fetchPictureList', auth, fetchPictureList)

// 新建分类
router.post('/createPicture', auth, hadAdminPermission, createPicture)

// 删除分类
router.delete('/deletePicture/:picture_id', auth, hadAdminPermission, destroyPicture)

// 获取分类列表
router.get('/fetchNavList', auth, fetchNavList)

// 新建分类
router.post('/createNav', auth, hadAdminPermission, createNav)

// 删除分类
router.delete('/deleteNav/:nav_id', auth, hadAdminPermission, destroyNav)

module.exports = router
