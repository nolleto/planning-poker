import axios from 'axios'
import JWT from 'jwt-client'

export const post = (url, data) => {
  return axios.post(url, data)
}

export const get = (url) => {
  return axios.get(url)
}

export const auth = () => {
  console.log(JWT.get())
  return axios.post('/api/auth/users', {
    email: 'admin@admin.com',
    password: 123456
  })
}
