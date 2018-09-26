import JWT from 'jwt-client'
import http from '../services/http'
import { USERS } from '../constants/api'

const saveToken = ({ data }) => {
  const { authToken } = data
  const session = JWT.read(authToken)

  JWT.keep(session)

  return data
}

export const create = data => {
  return http.post(USERS, data)
    .then(saveToken)
}
