import nock from 'nock'
import {
  get,
  post
} from './http'

describe('http service', () => {
  describe('get', () => {
    let response

    beforeAll(async () => {
      nock('http://localhost')
        .get('/')
        .reply(200)

      response = await get('/')
    })

    it('is a GET method', () => {
      expect(response.config.method).toBe('get')
    })
  })

  describe('post', () => {
    let response

    beforeAll(async () => {
      nock('http://localhost')
        .post('/')
        .reply(200)

      response = await post('/')
    })

    it('is a POST method', () => {
      expect(response.config.method).toBe('post')
    })
  })
})
