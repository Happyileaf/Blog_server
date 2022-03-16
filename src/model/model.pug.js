/*
 * @Author: your name
 * @Date: 2022-03-16 15:18:20
 * @LastEditTime: 2022-03-16 15:37:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\model\category.js
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')
const attributes = {
    // id 会被sequelize自动创建, 管理
    user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        // defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "user_id"
    },
}

const options = {
    tableName: "category",
    comment: "",
    id:"category_id",
    createdAt: "create_time",
    updatedAt: "update_time",
    indexes: []
}

const UserModel = sequelize.define('user_model', attributes, options)

// (async () => {
//     await sequelize.sync({ force: true });
//     // 这里是代码
//   })();

module.exports = UserModel