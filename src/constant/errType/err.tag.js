/*
 * @Author: your name
 * @Date: 2022-03-16 20:01:20
 * @LastEditTime: 2022-03-18 14:04:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\constant\errType\categoryErr\err.category.js
 */

module.exports = {
    TagNameNullError: {
        code: '30001',
        message: '标签名称为空',
        result: '',
    },
    TagURLNullError: {
        code: '30002',
        message: '标签URL为空',
        result: '',
    },
    TagStatusNullError: {
        code: '30003',
        message: '标签状态为空',
        result: '',
    },
    TagAlreadyExited: {
        code: '30004',
        message: '标签已经存在',
        result: '',
    },
    TagListFetchError: {
        code: '30005',
        message: '获取标签列表错误',
        result: '',
    },
    TagFetchError: {
        code: '30006',
        message: '获取标签信息错误',
        result: '',
    },
    TagCreateError: {
        code: '30007',
        message: '标签新增错误',
        result: '',
    },
    TagUpdateError: {
        code: '30008',
        message: '标签更新错误',
        result: '',
    },
    TagDeleteError: {
        code: '30009',
        message: '标签删除错误',
        result: '',
    },
}