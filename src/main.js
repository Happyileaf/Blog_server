/*
 * @Author: your name
 * @Date: 2022-03-15 10:38:26
 * @LastEditTime: 2022-03-15 15:56:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\main.js
 */

const { APP_PORT } = require('../config/config.default')

const app = require('./app')

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})