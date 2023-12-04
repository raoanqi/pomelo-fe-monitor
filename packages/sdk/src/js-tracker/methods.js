import { ERROR_TRY_CATCH } from './config'
import { CONFIG } from './config'

/**
 * @param errorLog
 * @param config
 * 错误数据预处理
 */
const handleError = (errorLog, report, errorList) => {
  // 是否延时处理
  if (!CONFIG.concat) {
    !needReport(CONFIG.sampling) || CONFIG.report([errorLog])
  } else {
    pushError(errorLog, errorList)
    report(errorList)
  }
}

/**
 * @param  {Object} error error 对象
 * @return {Object} 格式化后的对象
 * 生成 try..catch 错误日志
 */
const formatTryCatchError = error => ({
  type: ERROR_TRY_CATCH,
  desc: error.message,
  stack: error.stack
})

/**
 * @param  {Object} errorLog 错误日志
 * 往异常信息数组里面添加一条记录
 */
const pushError = (errorLog, errorList) => {
  if (needReport(CONFIG.sampling) && errorList.length < CONFIG.maxError) {
    errorList.push(errorLog)
  }
}

/**
 * @param sampling 0-1
 * @returns {boolean}
 * 设置一个采样率，决定是否上报
 */
const needReport = sampling => Math.random() < (sampling || 1)

export const handleTryCatchError = error => {
  handleError(formatTryCatchError(error))
}
