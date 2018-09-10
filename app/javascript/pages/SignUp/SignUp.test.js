import SignUp from './index'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(SignUp)
}

describe('SignUp component', () => {
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
