/*
 * @Author: your name
 * @Date: 2022-03-16 20:01:20
 * @LastEditTime: 2022-03-17 15:20:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\constant\errType\categoryErr\err.category.js
 */

module.exports = {
    categoryNameNullError: {
        code: '30001',
        message: '分类名称为空',
        result: '',
    },
    categoryURLNullError: {
        code: '30002',
        message: '分类URL为空',
        result: '',
    },
    categoryStatusNullError: {
        code: '30003',
        message: '分类状态为空',
        result: '',
    },
    categoryAlreadyExited: {
        code: '30004',
        message: '分类已经存在',
        result: '',
    },
    CategoryListFetchError: {
        code: '30005',
        message: '获取分类列表错误',
        result: '',
    },
    CategoryFetchError: {
        code: '30006',
        message: '获取分类信息错误',
        result: '',
    },
    CategoryCreateError: {
        code: '30007',
        message: '分类新增错误',
        result: '',
    },
    CategoryUpdateError: {
        code: '30008',
        message: '分类更新错误',
        result: '',
    },
    CategoryDeleteError: {
        code: '30009',
        message: '分类删除错误',
        result: '',
    },
}