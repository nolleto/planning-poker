import getters from './getters'

const defaultState = {
  user: {},
  errors: {}
}

describe('getters store', () => {
  describe('isUserSignedIn', () => {
    describe('When user is signed', () => {
      const state = {
        ...defaultState,
        user: {
          username: 'admin'
        }
      }

      it('returns "true"', () => {
        expect(getters.isUserSignedIn(state)).toBeTruthy()
      })
    })

    describe('When user is not signed', () => {
      const state = { ...defaultState }

      it('returns "false"', () => {
        expect(getters.isUserSignedIn(state)).toBeFalsy()
      })
    })
  })

  describe('username', () => {
    const state = {
      ...defaultState,
      user: {
        username: 'admin'
      }
    }

    it('returns the username', () => {
      expect(getters.username(state)).toBe('admin')
    })
  })

  describe('getErrorByName', () => {
    const state = {
      ...defaultState,
      errors: {
        username: [ 'Invalid field' ]
      }
    }
    const getError = getters.getErrorByName(state)

    describe('When passing "username"', () => {
      it('returns the "username" errors prop', () => {
        expect(getError('username')).toBe('Invalid field')
      })
    })

    describe('When passing a prop that does not exist', () => {
      it('returns "undefined"', () => {
        expect(getError('empty')).toBe(undefined)
      })
    })
  })
})
