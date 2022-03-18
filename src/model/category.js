/*
 * @Author: your name
 * @Date: 2022-03-16 15:18:20
 * @LastEditTime: 2022-03-17 15:41:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\model\category.js
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')
const attributes = {
    // id 会被sequelize自动创建, 管理
    category_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        // defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "category_id"
    },
    category_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        unique: true,
        autoIncrement: false,
        comment: null,
        field: "category_name"
    },
    category_url: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "category_url"
    },
    rank: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "rank"
    },
    back_ground: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: 'https://lc-mhke0kuv.cn-n1.lcfile.com/8c95587526f346c0.png',
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "back_ground"
    },
    icon: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: 'https://lc-mhke0kuv.cn-n1.lcfile.com/1c40f5eaba561e32.png',
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "icon"
    },
    status: {
        type: DataTypes.ENUM('0', '1', '2'),
        allowNull: false,
        defaultValue: '1',
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "status"
    },
}

const options = {
    tableName: "category",
    comment: "",
    id: "category_id",
    createdAt: "create_time",
    updatedAt: "update_time",
    indexes: []
}

const CategoryModel = sequelize.define('category_model', attributes, options)

// CategoryModel.sync({ force: true });
// 这里是代码

module.exports = CategoryModel