import axios from 'axios'
import JWT from 'jwt-client'

const defaultHeaders = () => ({
  'X-Key-Inflection': 'camel',
  authorization: JWT.get()
})

const defaultConfig = () => ({
  headers: defaultHeaders()
})

axios.interceptors.request.use(config => {
  return { ...config, ...defaultConfig() }
}, error => {
  return Promise.reject(error)
})

export const get = (url, config) => {
  return axios.get(url, config)
}

export const post = (url, data, config) => {
  return axios.post(url, data, config)
}
