import { USERS } from '../constants/api'
import services from '../services/http'
import { create } from './users'
import JWT from 'jwt-client'

describe('auth service', () => {
  describe('create', () => {
    const response = {
      data: {
        authToken: 'token-value'
      }
    }

    describe('When is successfully', () => {
      let data

      beforeAll(async () => {
        services.post = jest.fn(async () => response)
        data = await create({ username: 'admin', password: '123456' })
      })

      it('calls the right URL with a payload', () => {
        expect(services.post).toHaveBeenLastCalledWith(
          USERS,
          { username: 'admin', password: '123456' }
        )
      })

      it('returns data from response', () => {
        expect(data).toEqual(response.data)
      })

      it('reads the token by JWT', () => {
        expect(JWT.read).toHaveBeenCalledWith('token-value')
      })

      it('keeps the token by JWT', () => {
        expect(JWT.keep).toHaveBeenCalledWith({ token: 'token-value' })
      })
    })

    describe('When has a failure', () => {
      beforeAll(() => {
        services.post = jest.fn(async () => { throw new Error() })
      })

      it('throws a error', async () => {
        await expect(create('user', 'pass'))
          .rejects
          .toThrow()
      })
    })
  })
})
