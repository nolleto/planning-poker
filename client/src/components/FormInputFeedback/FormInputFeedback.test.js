import FormInputFeedback from './index'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(FormInputFeedback)
}

describe('FormInputFeedback component', () => {
  let wrapper

  describe('Snapshots', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    it('matches', () => {
      expect(wrapper.element).toMatchSnapshot()
    })

    describe('When has "invalid" state', () => {
      beforeAll(() => {
        wrapper.setProps({ state: 'invalid' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When has "valid" state', () => {
      beforeAll(() => {
        wrapper.setProps({ state: 'valid' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })
  })
})
