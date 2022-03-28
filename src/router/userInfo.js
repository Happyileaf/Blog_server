/*
 * @Author: your name
 * @Date: 2022-03-27 16:22:06
 * @LastEditTime: 2022-03-27 21:12:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\router\userInfo.js
 */


const Router = require('koa-router')

const { auth } = require('../middleware/auth.middleware')

const {
    fetchUserInfo,
    update
} = require('../controller/userInfo')

const router = new Router({ prefix: '/userInfo' })

// 注册接口
router.get('/fetchUserInfo', auth, fetchUserInfo)

// 登录接口
router.post('/update',auth, update)

// 修改密码接口
// router.post('/reset', auth, crpytPassword, resetPassword)

module.exports = router
