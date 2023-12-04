/**
 * @param func
 * @param delay
 * @param callback
 * @returns {(function(): void)|*}
 * 防抖
 */
export function debounce(func, delay, callback) {
  let timer
  return function () {
    const context = this, args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      func.apply(context, args)
      // 如果存在回调函数，就执行
      !callback || callback()
    }, delay)
  }
}

/**
 * @param src
 * @param dest
 * @returns {*}
 * 合并数据
 */
export function merge(src, dest) {
  for (let item of Object.keys(src)) {
    dest[item] = src[item]
  }
  return dest
}

/**
 * @param func
 * @returns {boolean}
 * 判断是否是函数
 */
export function isFunction(func) {
  return Object.prototype.toString.call(func) === '[object Function]'
}

/**
 * @param arrayLike
 * @returns {*[]}
 * 将类数组转换为数组
 */
export function arrayFrom(arrayLike) {
  return [].slice.call(arrayLike)
}

