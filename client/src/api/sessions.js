import JWT from 'jwt-client'
import http from '../services/http'
import { SESSIONS } from '../constants/api'

const saveToken = ({ data }) => {
  const { authToken } = data
  const session = JWT.read(authToken)

  JWT.keep(session)

  return data
}

export const signIn = (login, password) => {
  return http.post(SESSIONS, { login, password })
    .then(saveToken)
}

export const signOut = () => {
  return http.delete(SESSIONS)
    .then(() => {
      JWT.forget()
    })
}
