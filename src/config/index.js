import dotenv from 'dotenv'
dotenv.config()

const config = {
  dev: 'development',
  test: 'test',
  prod: 'production',
  env: process.env.NODE_ENV || ''
}

let envConfig

try {
  if (config.env === 'test') {
    config.env = 'testing'
  }
  // eslint-disable-next-line
  envConfig = require(`./${config.env}`)
} catch (e) {
  envConfig = {}
}

export default Object.assign({}, config, envConfig)
