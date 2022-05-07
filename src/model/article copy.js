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
        get() {
            return JSON.parse(this.getDataValue('tag_ids'));
        },
        set(value) {
            return this.setDataValue('tag_ids', JSON.stringify(value))
        },
        allowNull: false,
        // defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "tag_ids"
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











