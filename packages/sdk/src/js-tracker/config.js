export const CONFIG = {
  concat: true,
  delay: 2000, // 错误处理间隔时间
  maxError: 16, // 异常报错数量限制
  sampling: 1 // 采样率
}

export const ERROR_RUNTIME = 1
export const ERROR_SCRIPT = 2
export const ERROR_STYLE = 3
export const ERROR_IMAGE = 4
export const ERROR_AUDIO = 5
export const ERROR_VIDEO = 6
export const ERROR_CONSOLE = 7
export const ERROR_TRY_CATCH = 8

export const LOAD_ERROR_TYPE = {
  SCRIPT: ERROR_SCRIPT,
  LINK: ERROR_STYLE,
  IMG: ERROR_IMAGE,
  AUDIO: ERROR_AUDIO,
  VIDEO: ERROR_VIDEO
}
