/*
 * @Author: your name
 * @Date: 2022-03-18 14:23:52
 * @LastEditTime: 2022-05-08 16:49:33
 * @LastEditors: happy 997401767@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\service\tag.js
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const Tag = require('../model/tag')

class TagService {
    async createTag(tag) {
        const res = await Tag.create(tag)
        return res.dataValues
    }

    async updateTag(tag_id, tag) {
        // console.log('tag')
        // console.log(tag)
        // console.log(tag_id)
        const res = await Tag.update(tag, { where: { tag_id } })
        return res[0] > 0 ? true : false
    }

    async removeTag(id) {
        const res = await Tag.destroy({ where: { id } })

        return res > 0 ? true : false
    }

    async restoreTag(id) {
        const res = await Tag.restore({ where: { id } })

        return res > 0 ? true : false
    }

    async findTagList(fetchQuery) {
        // // 1. 获取总数
        // const count = await Tag.count()
        // // console.log(count)
        // // 2. 获取分页的具体数据
        // const offset = (pageNum - 1) * pageSize
        // const rows = await Tag.findAll({ offset: offset, limit: pageSize * 1 })

        const { pageNum, pageSize, tag_id, tag_name, rank,status } = fetchQuery
        const whereOpt = {}

        tag_id && Object.assign(whereOpt, { tag_id: { [Op.like]: `%${tag_id}%` } })
        tag_name && Object.assign(whereOpt, { tag_name: { [Op.like]: `%${tag_name}%` } })
        rank && Object.assign(whereOpt, { rank: { [Op.eq]: rank } })
        status && Object.assign(whereOpt, { status: { [Op.eq]: status } })
        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await Tag.findAndCountAll({
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

    async findTagById(tag_id) {
        const whereOpt = {}

        if(tag_id||tag_id===0)Object.assign(whereOpt, { tag_id })
        console.log(whereOpt)
        const res = await Tag.findOne({
            attributes: ['tag_id', 'tag_name', 'tag_url', 'rank', 'color', 'back_ground', 'icon', 'status'],
            where: whereOpt,
        })
        // console.log('tag res')
        // console.log(res)
        return res ? res.dataValues : null
    }

    async deleteTag(tag_id) {
        const res = await Tag.destroy({ where: { tag_id } })
        if (res) {
            return res
        } else {
            console.log('要删除的分类不存在')
        }
    }
}

module.exports = new TagService()