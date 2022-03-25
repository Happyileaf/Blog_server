/*
 * @Author: your name
 * @Date: 2022-03-20 17:02:37
 * @LastEditTime: 2022-03-25 21:44:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\router\userManage.js
 */

const Router = require('koa-router')

const {
    userValidator,
    verifyUser,
    crpytPassword,
    verifyLogin,
} = require('../middleware/user.middleware')

const { auth,hadAdminPermission } = require('../middleware/auth.middleware')

const {
    fetchList,
    fetchUser,
    create,
    update,
    destroy
} = require('../controller/userManage')

const router = new Router({ prefix: '/userManage' })

// 获取分类列表
router.get('/fetchList', auth, fetchList)

// 获取指定分类
router.get('/fetchUser', auth, fetchUser)

// 新建分类
router.post('/create', auth, hadAdminPermission, crpytPassword, create)

// 更新分类
router.post('/update', auth, hadAdminPermission, crpytPassword, update)

// 激活或冻结分类
router.post('/activateOrFreeze', auth, hadAdminPermission, update)

// 删除分类
router.delete('/delete/:user_id', auth, hadAdminPermission, destroy)

module.exports = router