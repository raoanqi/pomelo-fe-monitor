const ENV_DEV = 'development'
const ENV_PRODUCTION = 'production'

export default {
  version: '1.0.0',
  build: {
    bundleAnalyzerReport: false,
    env: ENV_PRODUCTION
  },
  dev: {
    bundleAnalyzerReport: false,
    env: ENV_DEV
  }
}