import ErrorSummary from './index'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(ErrorSummary)
}

describe('ErrorSummary component', () => {
  let wrapper

  describe('Snapshots', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    it('matches', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
