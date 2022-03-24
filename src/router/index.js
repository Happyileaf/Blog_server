/*
 * @Author: your name
 * @Date: 2022-03-15 16:10:05
 * @LastEditTime: 2022-03-15 16:10:06
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\router\index.js
 */


const fs = require('fs')

const Router = require('koa-router')
const router = new Router({ prefix: '/blogServer'})

fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.js') {
    let r = require('./' + file)
    router.use(r.routes())
  }
})

module.exports = router
