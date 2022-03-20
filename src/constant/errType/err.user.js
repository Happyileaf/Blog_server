/*
 * @Author: your name
 * @Date: 2022-03-20 17:36:10
 * @LastEditTime: 2022-03-20 17:36:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\constant\errType\err.user.js
 */

/*
 * @Author: your name
 * @Date: 2022-03-16 20:01:20
 * @LastEditTime: 2022-03-18 14:04:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Blog_server\src\constant\errType\categoryErr\err.category.js
 */

module.exports = {
    UserNameNullError: {
        code: '30001',
        message: '用户名称为空',
        result: '',
    },
    UserURLNullError: {
        code: '30002',
        message: '用户URL为空',
        result: '',
    },
    UserStatusNullError: {
        code: '30003',
        message: '用户状态为空',
        result: '',
    },
    UserAlreadyExited: {
        code: '30004',
        message: '用户已经存在',
        result: '',
    },
    UserListFetchError: {
        code: '30005',
        message: '获取用户列表错误',
        result: '',
    },
    UserFetchError: {
        code: '30006',
        message: '获取用户信息错误',
        result: '',
    },
    UserCreateError: {
        code: '30007',
        message: '用户新增错误',
        result: '',
    },
    UserUpdateError: {
        code: '30008',
        message: '用户更新错误',
        result: '',
    },
    UserDeleteError: {
        code: '30009',
        message: '用户删除错误',
        result: '',
    },
}