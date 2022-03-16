const bcrypt = require('bcryptjs')

const { getUerInfo } = require('../service/user')

// const {
//   userFormateError,
//   userAlreadyExited,
//   userRegisterError,
//   userDoesNotExist,
//   userLoginError,
//   invalidPassword,
// } = require('../constant/err.type')

const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  // 合法性
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    return
  }

  await next()
}

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body

  try {
    const res = await getUerInfo({ user_name })

    if (res) {
      console.error('用户名已经存在', { user_name })
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err)
    return
  }

  await next()
}

const verifyLogin = async (ctx, next) => {
  // 1. 判断用户是否存在(不存在:报错)
  console.log("check")
  console.log("check")
  const { user_name, password } = ctx.request.body

  try {
    const res = await getUerInfo({ user_name })

    if (!res) {
      console.error('用户名不存在', { user_name })
      return
    }

    // 2. 密码是否匹配(不匹配: 报错)
    if (password!==res.password) {
      console.error('不匹配', { user_name })
      return
    }
  } catch (err) {
    console.error(err)
    return 
  }

  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  verifyLogin,
}
