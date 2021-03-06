/*
 * @Author: your name
 * @Date: 2022-03-21 16:41:36
 * @LastEditTime: 2022-03-25 16:02:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\model\preset\recommendationNav.js
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../../db/sequelize')
const attributes = {
    // id 会被sequelize自动创建, 管理
    nav_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        // defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "nav_id"
    },
    nav_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "nav_name"
    },
    nav_url: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "nav_url"
    }, 
    nav_logo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "nav_logo"
    },
    nav_intro: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "nav_intro"
    },
    nav_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "nav_type"
    },
}

const options = {
    tableName: "recommendationNav",
    comment: "",
    id: "nav_id",
    createdAt: "create_time",
    updatedAt: "update_time",
    indexes: []
}

const recommendationNav = sequelize.define('recommendationNav_model', attributes, options)

// recommendationNav.sync({ force: true });
// 这里是代码

module.exports = recommendationNav