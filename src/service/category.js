/*
 * @Author: your name
 * @Date: 2022-03-16 20:51:50
 * @LastEditTime: 2022-05-08 18:18:21
 * @LastEditors: happy 997401767@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\service\category.js
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const Category = require('../model/category')

class CategoryService {
    async createCategory(category) {
        const res = await Category.create(category)
        return res.dataValues
    }

    async updateCategory(category_id, category) {
        const res = await Category.update(category, { where: { category_id } })
        return res[0] > 0 ? true : false
    }

    async removeCategory(id) {
        const res = await Category.destroy({ where: { id } })

        return res > 0 ? true : false
    }

    async restoreCategory(id) {
        const res = await Category.restore({ where: { id } })

        return res > 0 ? true : false
    }

    async findCategoryList(fetchQuery) {
        // // 1. 获取总数
        // const count = await Category.count()
        // // console.log(count)
        // // 2. 获取分页的具体数据
        // const offset = (pageNum - 1) * pageSize
        // const rows = await Category.findAll({ offset: offset, limit: pageSize * 1 })

        const { pageNum, pageSize, category_id, category_name, rank,status } = fetchQuery
        const whereOpt = {}
        
        category_id && Object.assign(whereOpt, { category_id: { [Op.like]: `%${category_id}%` } })
        category_name && Object.assign(whereOpt, { category_name: { [Op.like]: `%${category_name}%` } })
        category_name && Object.assign(whereOpt, { category_name: { [Op.like]: `%${category_name}%` } })
        rank && Object.assign(whereOpt, { rank: { [Op.eq]: rank } })
        status && Object.assign(whereOpt, { status: { [Op.eq]: status } })

        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await Category.findAndCountAll({
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

    async findCategoryById(category_id) {
        const whereOpt = {}

        category_id && Object.assign(whereOpt, { category_id })
        const res = await Category.findOne({
            attributes: ['category_id', 'category_name', 'category_url', 'rank', 'back_ground', 'icon', 'status'],
            where: whereOpt,
        })

        return res ? res.dataValues : null
    }

    async deleteCategory(category_id) {
        const res = await Category.destroy({ where: { category_id } })
        if (res) {
            return res
        } else {
            console.log('要删除的分类不存在')
        }
    }
}

module.exports = new CategoryService()