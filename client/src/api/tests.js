import { TEST } from '../constants/api'
import { get } from '../services/http'

export const test = () => get(TEST)
