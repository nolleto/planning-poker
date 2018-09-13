import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

axios.defaults.host = 'http://localhost'
axios.defaults.adapter = httpAdapter

jest.mock('jwt-client', () => ({
  get: jest.fn(() => 'token'),
  read: jest.fn(token => ({ token })),
  write: jest.fn(),
  keep: jest.fn(),
  remember: jest.fn(),
  forget: jest.fn(),
  validate: jest.fn()
}))
