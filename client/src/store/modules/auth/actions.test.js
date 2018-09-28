import * as usersServices from '@/api/users'
import * as sessionsServices from '@/api/sessions'
import router from '@/routers'
import actions from './actions'
import { TOGGLE_IS_LOADING } from '../common/mutations-types'
import {
  CLEAN_ERRORS,
  CLEAN_USER,
  SET_ERRORS,
  SET_USER
} from './mutations-types'

describe('actions store', () => {
  describe('signIn', () => {
    const path = 'signIn'
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
        sessionsServices.signIn = jest.fn(async () => ({ user: {} }))
        actions.signIn({ commit, state }, payload)
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(
          TOGGLE_IS_LOADING, null, { root: true }
        )
      })

      it('commits "CLEAN_ERRORS"', () => {
        expect(commit).toHaveBeenCalledWith(CLEAN_ERRORS, { path })
      })

      it('calls #signIn methods from auth service', () => {
        expect(sessionsServices.signIn).toHaveBeenCalledWith(
          'admin', 123456
        )
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SET_USER"', () => {
          expect(commit.mock.calls[2][0]).toBe(SET_USER)
        })

        it('pushes router with "/"', () => {
          expect(router.push).toHaveBeenCalledWith('/')
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[3][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })

    describe('When has a failure', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        sessionsServices.signIn = jest.fn(async () => {
          const error = new Error()
          error.response = { data: {} }
          throw error
        })
        actions.signIn({ commit, state }, payload)
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(
          TOGGLE_IS_LOADING, null, { root: true }
        )
      })

      it('commits "CLEAN_ERRORS"', () => {
        expect(commit).toHaveBeenCalledWith(CLEAN_ERRORS, { path })
      })

      it('calls #signIn methods from auth service', () => {
        expect(sessionsServices.signIn).toHaveBeenCalledWith(
          'admin', 123456
        )
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SET_ERRORS"', () => {
          expect(commit.mock.calls[2][0]).toBe(SET_ERRORS)
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[3][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })
  })

  describe('signUp', () => {
    const path = 'signUp'
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
        usersServices.create = jest.fn(async () => ({ user: {} }))
        actions.signUp({ commit, state }, payload)
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(
          TOGGLE_IS_LOADING, null, { root: true }
        )
      })

      it('commits "CLEAN_ERRORS"', () => {
        expect(commit).toHaveBeenCalledWith(CLEAN_ERRORS, { path })
      })

      it('calls #signUp methods from auth service', () => {
        expect(usersServices.create).toHaveBeenCalledWith(payload)
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SET_USER"', () => {
          expect(commit.mock.calls[2][0]).toBe(SET_USER)
        })

        it('pushes router with "/"', () => {
          expect(router.push).toHaveBeenCalledWith('/')
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[3][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })

    describe('When has a failure', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        usersServices.create = jest.fn(async () => {
          const error = new Error()
          error.response = { data: {} }
          throw error
        })
        actions.signUp({ commit, state }, payload)
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(
          TOGGLE_IS_LOADING, null, { root: true }
        )
      })

      it('commits "CLEAN_ERRORS"', () => {
        expect(commit).toHaveBeenCalledWith(CLEAN_ERRORS, { path })
      })

      it('calls #signUp methods from auth service', () => {
        expect(usersServices.create).toHaveBeenCalledWith(payload)
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SET_ERRORS"', () => {
          expect(commit.mock.calls[2][0]).toBe(SET_ERRORS)
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[3][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })
  })

  describe('signOut', () => {
    const path = 'signOut'
    const state = {}

    describe('When is successfully', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        sessionsServices.signOut = jest.fn(async () => ({ user: {} }))
        actions.signOut({ commit, state })
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(
          TOGGLE_IS_LOADING, null, { root: true }
        )
      })

      it('commits "CLEAN_ERRORS"', () => {
        expect(commit).toHaveBeenCalledWith(CLEAN_ERRORS, { path })
      })

      it('calls #signOut methods from auth service', () => {
        expect(sessionsServices.signOut).toHaveBeenCalled()
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "CLEAN_USER"', () => {
          expect(commit.mock.calls[2][0]).toBe(CLEAN_USER)
        })

        it('pushes router with "/"', () => {
          expect(router.push).toHaveBeenCalledWith('/')
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[3][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })

    describe('When has a failure', () => {
      const commit = jest.fn()

      beforeAll(() => {
        jest.useFakeTimers()
        router.push = jest.fn()
        sessionsServices.signOut = jest.fn(async () => {
          const error = new Error()
          error.response = { data: {} }
          throw error
        })
        actions.signOut({ commit, state })
      })

      it('commits "TOGGLE_IS_LOADING"', () => {
        expect(commit).toHaveBeenCalledWith(
          TOGGLE_IS_LOADING, null, { root: true }
        )
      })

      it('commits "CLEAN_ERRORS"', () => {
        expect(commit).toHaveBeenCalledWith(CLEAN_ERRORS, { path })
      })

      it('calls #signOut methods from auth service', () => {
        expect(sessionsServices.signOut).toHaveBeenCalled()
      })

      describe('and request finished', () => {
        beforeAll(() => {
          jest.runAllTimers()
        })

        it('commits "SET_ERRORS"', () => {
          expect(commit.mock.calls[2][0]).toBe(SET_ERRORS)
        })

        it('commits "TOGGLE_IS_LOADING"', () => {
          expect(commit.mock.calls[3][0]).toBe(TOGGLE_IS_LOADING)
        })
      })
    })
  })
})
