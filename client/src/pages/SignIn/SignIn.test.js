import SignIn from './index'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(SignIn)
}

describe('SignIn component', () => {
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
