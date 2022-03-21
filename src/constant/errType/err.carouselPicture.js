/*
 * @Author: your name
 * @Date: 2022-03-21 17:29:01
 * @LastEditTime: 2022-03-21 17:30:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\constant\errType\err.carouselPicture.js
 */

module.exports = {
    CategoryNameNullError: {
        code: '30001',
        message: '轮播图图片名称为空',
        result: '',
    },
    CategoryURLNullError: {
        code: '30002',
        message: '轮播图图片URL为空',
        result: '',
    },
    CategoryStatusNullError: {
        code: '30003',
        message: '轮播图图片状态为空',
        result: '',
    },
    CategoryAlreadyExited: {
        code: '30004',
        message: '轮播图图片已经存在',
        result: '',
    },
    CategoryListFetchError: {
        code: '30005',
        message: '获取轮播图图片列表错误',
        result: '',
    },
    CategoryFetchError: {
        code: '30006',
        message: '获取轮播图图片信息错误',
        result: '',
    },
    CategoryCreateError: {
        code: '30007',
        message: '轮播图图片新增错误',
        result: '',
    },
    CategoryUpdateError: {
        code: '30008',
        message: '轮播图图片更新错误',
        result: '',
    },
    CategoryDeleteError: {
        code: '30009',
        message: '轮播图图片删除错误',
        result: '',
    },
}