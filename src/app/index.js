/*
 * @Author: your name
 * @Date: 2022-03-15 16:02:26
 * @LastEditTime: 2022-03-20 15:20:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\app\index.js
 */

const path = require('path')

const Koa = require('koa')
const KoaBody = require('koa-body')
const KoaStatic = require('koa-static')
const parameter = require('koa-parameter')

const cors = require('koa2-cors');


const errHandler = require('./errHandler')
const router = require('../router')

const app = new Koa()

app.use(
  KoaBody({
    multipart: true,
    formidable: {
      // 在配制选项option里, 不推荐使用相对路径
      // 注意：在option里的相对路径, 不是相对的当前文件. 相对process.cwd()
      uploadDir: path.join(__dirname, '../public/upload'),
      keepExtensions: true,
    },
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
  })
)

app.use(KoaStatic(path.join(__dirname, '../public/upload')))
app.use(parameter(app))
app.use(cors());
app.use(router.routes()).use(router.allowedMethods())

// 统一的错误处理
app.on('error', errHandler)

module.exports = app
