/*
 * @Author: your name
 * @Date: 2022-03-19 14:15:51
 * @LastEditTime: 2022-03-19 16:55:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\service\article.js
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const Article = require('../model/article')

class ArticleService {
    async createArticle(article) {
        console.log(article)
        const res = await Article.create(article)
        return res.dataValues
    }

    async updateArticle(article_id, article) {
        console.log('article')
        console.log(article)
        const res = await Article.update(article, { where: { article_id } })
        return res[0] > 0 ? true : false
    }

    async removeArticle(id) {
        const res = await Article.destroy({ where: { id } })

        return res > 0 ? true : false
    }

    async restoreArticle(id) {
        const res = await Article.restore({ where: { id } })

        return res > 0 ? true : false
    }

    async findArticleList(fetchQuery) {
        // // 1. 获取总数
        // const count = await Article.count()
        // // console.log(count)
        // // 2. 获取分页的具体数据
        // const offset = (pageNum - 1) * pageSize
        // const rows = await Article.findAll({ offset: offset, limit: pageSize * 1 })

        const { pageNum, pageSize, article_id, title, rank } = fetchQuery
        const whereOpt = {}

        article_id && Object.assign(whereOpt, { article_id: { [Op.like]: `%${article_id}%` } })
        title && Object.assign(whereOpt, { title: { [Op.like]: `%${title}%` } })
        rank && Object.assign(whereOpt, { rank: { [Op.eq]: rank } })

        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await Article.findAndCountAll({
            where: whereOpt,
            offset: offset,
            limit: pageSize * 1,
        })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows,
        }
    }

    async findArticleById(article_id) {
        const whereOpt = {}

        article_id && Object.assign(whereOpt, { article_id })
        console.log(whereOpt)
        const res = await Article.findOne({
            where: whereOpt,
        })

        return res ? res.dataValues : null
    }

    async deleteArticle(article_id) {
        const res = await Article.destroy({ where: { article_id } })
        if (res) {
            return res
        } else {
            console.log('要删除的文章不存在')
        }
    }
}

module.exports = new ArticleService()