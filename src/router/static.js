/*
 * @Author: your name
 * @Date: 2022-03-18 16:36:07
 * @LastEditTime: 2022-03-18 16:46:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\router\static.js
 */

const Router = require('koa-router')

const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { upload } = require('../utils/upload')

const router = new Router({ prefix: '/static' })

// 上传文件
router.post('/upload', upload)

module.exports = router
