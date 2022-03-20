/*
 * @Author: your name
 * @Date: 2022-03-19 14:02:30
 * @LastEditTime: 2022-03-19 17:00:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\router\article.js
 */

const Router = require('koa-router')

const {
    fetchList,
    fetchArticle,
    create,
    update,
    destroy
} = require('../controller/article')

const {
    auth
} = require('../middleware/auth.middleware')

const router = new Router({ prefix: '/article' })

router.get('/fetchList', fetchList)

router.get('/fetchArticle', fetchArticle)

router.post('/create', auth, create)

router.post('/update', auth, update)

router.post('/activateOrFreeze', auth, update)

router.delete('/delete/:article_id', auth, destroy)

module.exports = router