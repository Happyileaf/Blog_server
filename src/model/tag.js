/*
 * @Author: your name
 * @Date: 2022-03-16 15:38:36
 * @LastEditTime: 2022-03-16 16:56:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\model\tag.js
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')
const attributes = {
    // id 会被sequelize自动创建, 管理
    tag_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        // defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "tag_id"
    },
    tag_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "tag_name"
    },
    tag_url: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: true,
        comment: null,
        field: "tag_url"
    },
    rank: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: true,
        comment: null,
        field: "rank"
    },
    color: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "color"
    },
    icon: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: 'https://lc-mhke0kuv.cn-n1.lcfile.com/1c40f5eaba561e32.png',
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "icon"
    },
    back_ground: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "back_ground"
    },
    post_article_count: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 12896,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "post_article_count"
    },
    concern_user_count: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 296018,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "concern_user_count"
    },
    status: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "status"
    },
}

const options = {
    tableName: "tag",
    comment: "",
    id: "tag_id",
    createdAt: "create_time",
    updatedAt: "update_time",
    indexes: []
}

const TagModel = sequelize.define('tag_model', attributes, options)

// (async () => {
//     await sequelize.sync({ force: true });
//     // 这里是代码
//   })();

module.exports = TagModel