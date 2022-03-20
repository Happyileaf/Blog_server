/*
 * @Author: your name
 * @Date: 2022-03-16 20:01:20
 * @LastEditTime: 2022-03-19 14:28:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\constant\errType\err.article.js
 */

module.exports = {
    ArticleNameNullError: {
        code: '30001',
        message: '分类名称为空',
        result: '',
    },
    ArticleURLNullError: {
        code: '30002',
        message: '分类URL为空',
        result: '',
    },
    ArticleStatusNullError: {
        code: '30003',
        message: '分类状态为空',
        result: '',
    },
    ArticleAlreadyExited: {
        code: '30004',
        message: '分类已经存在',
        result: '',
    },
    ArticleListFetchError: {
        code: '30005',
        message: '获取分类列表错误',
        result: '',
    },
    ArticleFetchError: {
        code: '30006',
        message: '获取分类信息错误',
        result: '',
    },
    ArticleCreateError: {
        code: '30007',
        message: '分类新增错误',
        result: '',
    },
    ArticleUpdateError: {
        code: '30008',
        message: '分类更新错误',
        result: '',
    },
    ArticleDeleteError: {
        code: '30009',
        message: '分类删除错误',
        result: '',
    },
}