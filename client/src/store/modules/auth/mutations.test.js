import mutations from './mutations'
import {
  CLEAN_ERROR,
  CLEAN_ERRORS,
  SET_ERRORS,
  SET_USER,
  CLEAN_USER
} from './mutations-types'

const defaultState = {
  user: {},
  errors: {}
}

describe('mutations store', () => {
  describe('SET_USER', () => {
    const state = { ...defaultState }
    const user = {
      username: 'admin'
    }

    beforeAll(() => {
      mutations[SET_USER](state, user)
    })

    it('set "user"', () => {
      expect(state.user).toEqual(user)
    })
  })

  describe('SET_ERRORS', () => {
    const path = 'somePath'
    const state = { ...defaultState }
    const errors = {
      username: [ 'Invalid field' ]
    }

    beforeAll(() => {
      mutations[SET_ERRORS](state, { path, errors })
    })

    it('set "errors" according "path"', () => {
      expect(state.errors[path]).toEqual(errors)
    })
  })

  describe('CLEAN_ERRORS', () => {
    const path = 'somePath'
    const state = {
      ...defaultState,
      errors: {
        [path]: {
          error: 'some message'
        }
      }
    }
    beforeAll(() => {
      mutations[CLEAN_ERRORS](state, { path })
    })

    it('cleans all errors according "path"', () => {
      expect(state.errors[path]).toEqual({})
    })
  })

  describe('CLEAN_ERROR', () => {
    const path = 'somePath'
    const state = {
      ...defaultState,
      errors: {
        [path]: {
          error1: 'some message',
          error2: 'some message'
        }
      }
    }
    beforeAll(() => {
      mutations[CLEAN_ERROR](state, { path, errorName: 'error2' })
    })

    it('deletes specific error according "path"', () => {
      expect(state.errors[path].error2).toBe(undefined)
    })
  })

  describe('CLEAN_USER', () => {
    const state = {
      ...defaultState,
      user: {
        username: 'admin'
      }
    }

    beforeAll(() => {
      mutations[CLEAN_USER](state)
    })

    it('cleans "user"', () => {
      expect(state.user).toEqual({})
    })
  })
})
