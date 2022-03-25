/*
 * @Author: your name
 * @Date: 2022-03-15 15:02:36
 * @LastEditTime: 2022-03-25 22:06:31
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
    user_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        unique: true,
        autoIncrement: false,
        comment: "用户名",
        field: "user_name"
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "密码",
        field: "password"
    },
    roles: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
        get() {
            return this.getDataValue('roles').split(',');
        },
        set(value) {
            return this.setDataValue('roles', value.join(','))
        },
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "邮箱",
        field: "email"
    },
    intro: {
        type: DataTypes.STRING(255),
        allowNull: true,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "介绍",
        field: "intro"
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
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: "状态",
        field: "status"
    },
}

const options = {
    tableName: "user",
    comment: "",
    id: "user_id",
    createdAt: "create_time",
    updatedAt: "update_time",
    indexes: []
}

const UserModel = sequelize.define('user_model', attributes, options)

// UserModel.sync({ force: true });

module.exports = UserModel