/*
 * @Author: your name
 * @Date: 2022-03-15 14:31:36
 * @LastEditTime: 2022-03-15 17:28:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\config\sequelize.js
 */
module.exports = {
    dialect: "mysql",
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "",
    //你的数据库名
    database: 'test',
    logging: false
}