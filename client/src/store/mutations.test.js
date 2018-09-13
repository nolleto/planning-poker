import mutations from './mutations'
import {
  TOGGLE_IS_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_SUCCESS
} from './mutations-types'

const defaultState = {
  isLoading: false,
  user: {},
  errors: {}
}

describe('mutations store', () => {
  describe('TOGGLE_IS_LOADING', () => {
    const state = { ...defaultState }

    beforeAll(() => {
      mutations[TOGGLE_IS_LOADING](state)
    })

    it('changes "isLoading"', () => {
      expect(state.isLoading).toBeTruthy()
    })
  })

  describe('SIGN_IN_SUCCESS', () => {
    const state = {
      ...defaultState,
      errors: {
        username: [ 'invalid' ]
      }
    }
    const user = {
      username: 'admin'
    }

    beforeAll(() => {
      mutations[SIGN_IN_SUCCESS](state, user)
    })

    it('set "user"', () => {
      expect(state.user).toEqual(user)
    })

    it('clean "errors"', () => {
      expect(state.errors).toEqual({})
    })
  })

  describe('SIGN_IN_FAILURE', () => {
    const state = { ...defaultState }
    const errors = {
      username: [ 'Invalid field' ]
    }

    beforeAll(() => {
      mutations[SIGN_IN_FAILURE](state, { errors })
    })

    it('set "errors"', () => {
      expect(state.errors).toEqual(errors)
    })
  })

  describe('SIGN_UP_SUCCESS', () => {
    const state = {
      ...defaultState,
      errors: {
        username: [ 'invalid' ]
      }
    }
    const user = {
      username: 'admin'
    }

    beforeAll(() => {
      mutations[SIGN_UP_SUCCESS](state, user)
    })

    it('set "user"', () => {
      expect(state.user).toEqual(user)
    })

    it('clean "errors"', () => {
      expect(state.errors).toEqual({})
    })
  })

  describe('SIGN_UP_FAILURE', () => {
    const state = { ...defaultState }
    const errors = {
      username: [ 'Invalid field' ]
    }

    beforeAll(() => {
      mutations[SIGN_UP_FAILURE](state, { errors })
    })

    it('set "errors"', () => {
      expect(state.errors).toEqual(errors)
    })
  })

  describe('SIGN_OUT_SUCCESS', () => {
    const state = {
      ...defaultState,
      user: {
        username: 'admin'
      }
    }

    beforeAll(() => {
      mutations[SIGN_OUT_SUCCESS](state)
    })

    it('clean "user"', () => {
      expect(state.user).toEqual({})
    })
  })
})
