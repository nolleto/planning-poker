import * as authServices from '../api/auth'
import router from '../routers'
import actions from './actions'
import {
  TOGGLE_IS_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from './mutations-types'

describe('actions store', () => {
  describe('signIn', () => {
    const state = {}
    const payload = {
      userOrEmail: 'admin',
      password: 123456
    }

    describe('When is successfully', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        authServices.signIn = jest.fn(async () => ({ user: {} }))
        actions.signIn({ commit, state }, payload)
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(TOGGLE_IS_LOADING)
      })

      it('calls #signIn methods from auth service', () => {
        expect(authServices.signIn).toHaveBeenCalledWith(
          'admin', 123456
        )
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SIGN_IN_SUCCESS"', () => {
          expect(commit.mock.calls[1][0]).toBe(SIGN_IN_SUCCESS)
        })

        it('pushes router with "/"', () => {
          expect(router.push).toHaveBeenCalledWith('/')
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[2][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })

    describe('When has a failure', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        authServices.signIn = jest.fn(async () => {
          const error = new Error()
          error.response = { data: {} }
          throw error
        })
        actions.signIn({ commit, state }, payload)
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(TOGGLE_IS_LOADING)
      })

      it('calls #signIn methods from auth service', () => {
        expect(authServices.signIn).toHaveBeenCalledWith(
          'admin', 123456
        )
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SIGN_IN_FAILURE"', () => {
          expect(commit.mock.calls[1][0]).toBe(SIGN_IN_FAILURE)
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[2][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })
  })

  describe('signUp', () => {
    const state = {}
    const payload = {
      username: 'admin',
      email: 'admin@example.com',
      password: 123456
    }

    describe('When is successfully', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        authServices.signUp = jest.fn(async () => ({ user: {} }))
        actions.signUp({ commit, state }, payload)
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(TOGGLE_IS_LOADING)
      })

      it('calls #signUp methods from auth service', () => {
        expect(authServices.signUp).toHaveBeenCalledWith(payload)
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SIGN_UP_SUCCESS"', () => {
          expect(commit.mock.calls[1][0]).toBe(SIGN_UP_SUCCESS)
        })

        it('pushes router with "/"', () => {
          expect(router.push).toHaveBeenCalledWith('/')
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[2][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })

    describe('When has a failure', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        authServices.signUp = jest.fn(async () => {
          const error = new Error()
          error.response = { data: {} }
          throw error
        })
        actions.signUp({ commit, state }, payload)
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(TOGGLE_IS_LOADING)
      })

      it('calls #signUp methods from auth service', () => {
        expect(authServices.signUp).toHaveBeenCalledWith(payload)
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SIGN_UP_FAILURE"', () => {
          expect(commit.mock.calls[1][0]).toBe(SIGN_UP_FAILURE)
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[2][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })
  })

  describe('signOut', () => {
    const state = {}

    describe('When is successfully', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        authServices.signOut = jest.fn(async () => ({ user: {} }))
        actions.signOut({ commit, state })
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(TOGGLE_IS_LOADING)
      })

      it('calls #signOut methods from auth service', () => {
        expect(authServices.signOut).toHaveBeenCalled()
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SIGN_OUT_SUCCESS"', () => {
          expect(commit.mock.calls[1][0]).toBe(SIGN_OUT_SUCCESS)
        })

        it('pushes router with "/"', () => {
          expect(router.push).toHaveBeenCalledWith('/')
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[2][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })

    describe('When has a failure', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        authServices.signOut = jest.fn(async () => {
          const error = new Error()
          error.response = { data: {} }
          throw error
        })
        actions.signOut({ commit, state })
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(TOGGLE_IS_LOADING)
      })

      it('calls #signOut methods from auth service', () => {
        expect(authServices.signOut).toHaveBeenCalled()
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SIGN_OUT_FAILURE"', () => {
          expect(commit.mock.calls[1][0]).toBe(SIGN_OUT_FAILURE)
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[2][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })
  })
})
