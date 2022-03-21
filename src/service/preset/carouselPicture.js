/*
 * @Author: your name
 * @Date: 2022-03-21 16:53:52
 * @LastEditTime: 2022-03-21 18:01:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\controller\preset\carouselPicture.js
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const CarouselPicture = require('../../model/preset/carouselPicture')

class CarouselPictureService {
    async createCarouselPicture(carouselPicture) {
        console.log(carouselPicture)
        const res = await CarouselPicture.create(carouselPicture)
        return res.dataValues
    }

    async findCarouselPictureList(fetchQuery) {
        const { } = fetchQuery
        const whereOpt = {}
        const { count, rows } = await CarouselPicture.findAndCountAll({
            where: whereOpt,
        })
        return {
            total: count,
            list: rows,
        }
    }

    async deleteCarouselPicture(picture_id) {
        const res = await CarouselPicture.destroy({ where: { picture_id } })
        if (res) {
            return res
        } else {
            console.log('要删除的轮播图图片不存在')
        }
    }
}

module.exports = new CarouselPictureService()