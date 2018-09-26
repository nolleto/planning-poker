import { TEST } from '../constants/api'
import http from '../services/http'

export const test = () => http.get(TEST)
