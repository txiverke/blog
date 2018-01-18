import dotenv from 'dotenv'
dotenv.config()

const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  env: process.env.NODE_ENV || ''
}

let envConfig

try {
  // eslint-disable-next-line
  envConfig = require(`./${config.env}`)
} catch (e) {
  envConfig = {}
}

export default Object.assign({}, config, envConfig)
