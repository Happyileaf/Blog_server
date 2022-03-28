/*
 * @Author: your name
 * @Date: 2022-03-15 15:02:36
 * @LastEditTime: 2022-03-27 22:03:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\model\user.js
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
    nick_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        unique: true,
        autoIncrement: false,
        comment: "昵称",
        field: "nick_name"
    },
    avatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: 'https://img2.baidu.com/it/u=2251201040,4120245779&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        primaryKey: false,
        autoIncrement: false,
        comment: "头像",
        field: "avatar"
    },
    introduction: {
        type: DataTypes.STRING(255),
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "介绍",
        field: "introduction"
    },
    company: {
        type: DataTypes.STRING(255),
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "公司",
        field: "company"
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "位置",
        field: "location"
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "邮箱",
        field: "email"
    },
    website: {
        type: DataTypes.STRING(255),
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "主页",
        field: "website"
    },
    socialAccount: {
        type: DataTypes.TEXT,
        get() {
            return JSON.parse(this.getDataValue('socialAccount'));
        },
        set(value) {
            return this.setDataValue('socialAccount', JSON.stringify(value))
        },
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "社交",
        field: "socialAccount"
    },
    education: {
        type: DataTypes.TEXT,
        get() {
            return JSON.parse(this.getDataValue('education'));
        },
        set(value) {
            return this.setDataValue('education', JSON.stringify(value))
        },
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "教育",
        field: "education"
    },
    skills: {
        type: DataTypes.TEXT,
        get() {
            return JSON.parse(this.getDataValue('skills'));
        },
        set(value) {
            return this.setDataValue('skills', JSON.stringify(value))
        },
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "技能",
        field: "skills"
    },
    // roles: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //     defaultValue: '',
    //     get() {
    //         return this.getDataValue('roles').split(',');
    //     },
    //     set(value) {
    //         return this.setDataValue('roles', value.join(','))
    //     },
    // },
}

const options = {
    tableName: "userInfo",
    comment: "",
    id: "user_id",
    createdAt: "create_time",
    updatedAt: "update_time",
    indexes: []
}

const UserInfoModel = sequelize.define('userInfo_model', attributes, options)

// UserInfoModel.sync({ force: true });

module.exports = UserInfoModel