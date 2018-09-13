import { AUTH } from '../constants/api'
import * as services from '../services/http'
import {
  signIn,
  signOut,
  signUp
} from './auth'
import JWT from 'jwt-client'

describe('auth service', () => {
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
        expect(services.post).toHaveBeenCalledWith(
          AUTH,
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

  describe('signUp', () => {
    const response = {
      data: {
        authToken: 'token-value'
      }
    }

    describe('When is successfully', () => {
      let data

      beforeAll(async () => {
        services.post = jest.fn(async () => response)
        data = await signUp({ username: 'admin', password: '123456' })
      })

      it('calls the right URL with a payload', () => {
        expect(services.post).toHaveBeenCalledWith(
          `${AUTH}/sign_up`,
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
        await expect(signUp('user', 'pass'))
          .rejects
          .toThrow()
      })
    })
  })

  describe('signOut', () => {
    beforeAll(async () => {
      await signOut()
    })

    it('forgets the token by JWT', () => {
      expect(JWT.forget).toHaveBeenCalled()
    })
  })
})
