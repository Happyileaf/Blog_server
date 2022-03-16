/*
 * @Author: your name
 * @Date: 2022-03-16 20:51:50
 * @LastEditTime: 2022-03-16 21:11:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\service\category.js
 */

const Category = require('../model/category')

class CategoryService {
    async createCategory(category) {
        const res = await Category.create(category)
        return res.dataValues
    }

    async updateCategory(id, category) {
        const res = await Category.update(category, { where: { id } })

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

    async findCategory(pageNum, pageSize) {
        // // 1. 获取总数
        // const count = await Category.count()
        // // console.log(count)
        // // 2. 获取分页的具体数据
        // const offset = (pageNum - 1) * pageSize
        // const rows = await Category.findAll({ offset: offset, limit: pageSize * 1 })

        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await Category.findAndCountAll({
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
    }

    async deleteCategory(id) {
        const res = await Category.create(category)
        return res.dataValues
    }
}

module.exports = new CategoryService()