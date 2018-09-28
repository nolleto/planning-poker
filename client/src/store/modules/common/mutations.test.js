import mutations from './mutations'
import {
  TOGGLE_IS_LOADING
} from './mutations-types'

const defaultState = {
  isLoading: false
}

describe('mutations store', () => {
  describe('TOGGLE_IS_LOADING', () => {
    describe('When os "false"', () => {
      const state = { ...defaultState }

      beforeAll(() => {
        mutations[TOGGLE_IS_LOADING](state)
      })

      it('changes "isLoading" to "true"', () => {
        expect(state.isLoading).toBeTruthy()
      })
    })

    describe('When os "true"', () => {
      const state = {
        ...defaultState,
        isLoading: true
      }

      beforeAll(() => {
        mutations[TOGGLE_IS_LOADING](state)
      })

      it('changes "isLoading" to "false"', () => {
        expect(state.isLoading).toBeFalsy()
      })
    })
  })
})
