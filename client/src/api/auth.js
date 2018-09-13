import JWT from 'jwt-client'
import { post } from '../services/http'
import { AUTH } from '../constants/api'

const saveToken = ({ data }) => {
  const { authToken } = data
  const session = JWT.read(authToken)

  JWT.keep(session)

  return data
}

export const signIn = (login, password) => {
  return post(AUTH, { login, password })
    .then(saveToken)
}
export const signUp = data => {
  return post(`${AUTH}/sign_up`, data)
    .then(saveToken)
}

export const signOut = async () => {
  JWT.forget()
}
