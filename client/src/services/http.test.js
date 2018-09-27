import nock from 'nock'
import http from './http'

describe('http service', () => {
  describe('get', () => {
    let response

    beforeAll(async () => {
      nock('http://localhost')
        .get('/')
        .reply(200)

      response = await http.get('/')
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

      response = await http.post('/')
    })

    it('is a POST method', () => {
      expect(response.config.method).toBe('post')
    })
  })

  describe('delete', () => {
    let response

    beforeAll(async () => {
      nock('http://localhost')
        .delete('/')
        .reply(200)

      response = await http.delete('/')
    })

    it('is a DELETE method', () => {
      expect(response.config.method).toBe('delete')
    })
  })
})
