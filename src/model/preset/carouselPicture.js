/*
 * @Author: your name
 * @Date: 2022-03-21 16:30:36
 * @LastEditTime: 2022-03-21 17:46:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\model\preset\carouselPicture.js
 */

const { DataTypes } = require('sequelize')
const sequelize = require('../../db/sequelize')
const attributes = {
    // id 会被sequelize自动创建, 管理
    picture_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        // defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "picture_id"
    },
    picture_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        unique: true,
        autoIncrement: false,
        comment: null,
        field: "picture_name"
    },
    picture_url: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "picture_url"
    },
    picture_intro: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "picture_intro"
    },
}

const options = {
    tableName: "carouselPicture",
    comment: "",
    id: "picture_id",
    createdAt: "create_time",
    updatedAt: "update_time",
    indexes: []
}

const carouselPictureModel = sequelize.define('carouselPicture_model', attributes, options)

// carouselPictureModel.sync({ force: true });
// 这里是代码

module.exports = carouselPictureModel