import { SESSIONS } from '../constants/api'
import services from '../services/http'
import {
  signIn,
  signOut
} from './sessions'
import JWT from 'jwt-client'

describe('SESSIONS service', () => {
  describe('signIn', () => {
    const response = {
      data: {
        authToken: 'token-value'
      }
    }

    describe('When is successfully', () => {
      let data

      beforeAll(async () => {
        services.post = jest.fn(async () => response)
        data = await signIn('user', 'pass')
      })

      it('calls the right URL with a payload', () => {
        expect(services.post).toHaveBeenLastCalledWith(
          SESSIONS,
          { login: 'user', password: 'pass' }
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
        await expect(signIn('user', 'pass'))
          .rejects
          .toThrow()
      })
    })
  })

  describe('signOut', () => {
    describe('When is successfully', () => {
      beforeAll(async () => {
        services.delete = jest.fn(async () => ({}))
        await signOut()
      })

      it('calls the right URL', () => {
        expect(services.delete).toHaveBeenLastCalledWith(SESSIONS)
      })

      it('forgets the token by JWT', () => {
        expect(JWT.forget).toHaveBeenCalled()
      })
    })

    describe('When has a failure', () => {
      beforeAll(() => {
        services.delete = jest.fn(async () => { throw new Error() })
      })

      it('throws a error', async () => {
        await expect(signOut())
          .rejects
          .toThrow()
      })
    })
  })
})
