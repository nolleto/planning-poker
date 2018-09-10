import NavLogin from './index'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(NavLogin)
}

describe('NavLogin component', () => {
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
