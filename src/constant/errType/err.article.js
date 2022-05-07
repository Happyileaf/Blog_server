/*
 * @Author: your name
 * @Date: 2022-03-16 20:01:20
 * @LastEditTime: 2022-05-07 20:48:05
 * @LastEditors: happy 997401767@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\constant\errType\err.article.js
 */

module.exports = {
    ArticleNameNullError: {
        code: '30001',
        message: '文章名称为空',
        result: '',
    },
    ArticleURLNullError: {
        code: '30002',
        message: '文章URL为空',
        result: '',
    },
    ArticleStatusNullError: {
        code: '30003',
        message: '文章状态为空',
        result: '',
    },
    ArticleAlreadyExited: {
        code: '30004',
        message: '文章已经存在',
        result: '',
    },
    ArticleListFetchError: {
        code: '30005',
        message: '获取文章列表错误',
        result: '',
    },
    ArticleFetchError: {
        code: '30006',
        message: '获取文章信息错误',
        result: '',
    },
    ArticleCreateError: {
        code: '30007',
        message: '文章新增错误',
        result: '',
    },
    ArticleUpdateError: {
        code: '30008',
        message: '文章更新错误',
        result: '',
    },
    ArticleDeleteError: {
        code: '30009',
        message: '文章删除错误',
        result: '',
    },
}