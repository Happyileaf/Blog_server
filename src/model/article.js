/*
 * @Author: your name
 * @Date: 2022-03-19 13:50:30
 * @LastEditTime: 2022-03-19 16:48:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\model\article.js
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')
const attributes = {
    // id 会被sequelize自动创建, 管理
    article_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        // defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "article_id"
    },
    user_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "user_id"
    },
    category_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "category_id"
    },
    tag_ids: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "tag_ids"
    },
    link_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "link_url"
    },
    cover_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "cover_image"
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "title"
    },
    brief_content: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "brief_content"
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "content"
    },
    visible_level: {
        type: DataTypes.ENUM('0', '1', '2'),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "visible_level"
    },
    view_count: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "view_count"
    },
    status: {
        type: DataTypes.ENUM('0', '1', '2'),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "status"
    },
}

const options = {
    tableName: "article",
    comment: "",
    id: "article_id",
    createdAt: "create_time",
    updatedAt: "update_time",
    indexes: []
}

const ArticleModel = sequelize.define('article_model', attributes, options)


// ArticleModel.sync({ force: true });

module.exports = ArticleModel