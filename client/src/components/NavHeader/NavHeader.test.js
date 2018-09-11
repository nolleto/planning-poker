import NavHeader from './index'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(NavHeader)
}

describe('NavHeader component', () => {
  let wrapper

  describe('Snapshots', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    it('matches', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('Event Listeners', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    describe('When clicked in home link', () => {
      beforeEach(() => {
        jest.spyOn(wrapper.vm, '$emit')
        wrapper.find('a').trigger('click')
      })

      it('emits "go-home"', () => {
        expect(wrapper.vm.$emit).toHaveBeenCalledWith('go-home')
      })
    })
  })
})
