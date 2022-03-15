/*
 * @Author: your name
 * @Date: 2022-03-15 14:29:17
 * @LastEditTime: 2022-03-15 17:32:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\db\sequelize.js
 */

const { Sequelize } = require('sequelize')

const {
    dialect,
    host,
    port,
    username,
    password,
    database,
    logging } = require('../../config/sequelize')

const seq = new Sequelize(database, username, password, {
    host,
    dialect: "mysql",
    logging
})

seq.authenticate()
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch(err => {
        console.log('数据库连接失败', err)
    })

module.exports = seq
