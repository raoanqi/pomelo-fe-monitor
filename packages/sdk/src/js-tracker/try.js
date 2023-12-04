import { arrayFrom, isFunction, merge } from './utils'

const tryJs = {}
tryJs.wrap = wrap
tryJs.wrapArgs = tryifyArgs

const wrap = func => (isFunction(func) ? tryify(func) : func)

const config = {
  handleTryCatchError: () => {}
}

/**
 * @param func
 * @returns {function(): *}
 * 对函数参数进行包装
 */
const tryifyArgs = func => {
  return function () {
    const args = arrayFrom(arguments).map(function (arg) {
      return wrap(arg)
    })
    return func.apply(this, args)
  }
}

/**
 * @param func
 * 将函数用try catch包装
 */
const tryify = func => {
  // todo：包装的作用是什么
  if (!func._wrapped) {
    func._wrapped = () => {
      try {
        return func.apply(this, arguments)
      } catch (error) {
        config.handleTryCatchError(error)
        window.ignoreError = true
        throw error
      }
    }
  }
}

/**
 * 对外导出
 */

export const setting = options => {
  merge(options, config)
}

export default tryJs
