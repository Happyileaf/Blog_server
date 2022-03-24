/*
 * @Author: your name
 * @Date: 2022-03-16 15:38:36
 * @LastEditTime: 2022-03-24 17:37:21
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
        primaryKey: false,
        unique: true,
        autoIncrement: false,
        comment: null,
        field: "tag_name"
    },
    tag_url: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "tag_url"
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
    color: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '#e81864',
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "color"
    },
    icon: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: 'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/leancloud-assets/f16f548d25028a1fdd80.png~tplv-t2oaga2asx-image.image',
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "icon"
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
    post_article_count: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "post_article_count"
    },
    concern_user_count: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: 0,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "concern_user_count"
    },
    status: {
        type: DataTypes.ENUM('0', '1', '2'),
        get() {
            return this.getDataValue('status') - 0;
        },
        set(value) {
            return this.setDataValue('status', value + "")
        },
        allowNull: false,
        defaultValue: '1',
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

// TagModel.sync({ force: true });
// 这里是代码

module.exports = TagModel