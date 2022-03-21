/*
 * @Author: your name
 * @Date: 2022-03-21 16:56:06
 * @LastEditTime: 2022-03-21 17:40:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\preset\recommendationNav.js
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const RecommendationNav = require('../../model/preset/recommendationNav')

class RecommendationNavService {
    async createRecommendationNav(recommendationNav) {
        console.log(recommendationNav)
        const res = await RecommendationNav.create(recommendationNav)
        return res.dataValues
    }

    async findRecommendationNavList(fetchQuery) {
        const { } = fetchQuery
        const whereOpt = {}
        const { count, rows } = await RecommendationNav.findAndCountAll({
            where: whereOpt,
        })
        return {
            total: count,
            list: rows,
        }
    }

    async deleteRecommendationNav(nav_id) {
        const res = await RecommendationNav.destroy({ where: { nav_id } })
        if (res) {
            return res
        } else {
            console.log('要删除的推荐导航不存在')
        }
    }
}

module.exports = new RecommendationNavService()