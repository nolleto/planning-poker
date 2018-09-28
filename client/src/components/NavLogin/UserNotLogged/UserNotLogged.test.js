import UserNotLogged from './index'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(UserNotLogged)
}

describe('UserNotLogged component', () => {
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

    describe('When clicked in "Sign In" link', () => {
      beforeEach(() => {
        jest.spyOn(wrapper.vm, '$emit')
        wrapper.findAll('a').at(0).trigger('click')
      })

      it('emits "sign-in"', () => {
        expect(wrapper.vm.$emit).toHaveBeenCalledWith('sign-in')
      })
    })

    describe('When clicked in "Sign Up" link', () => {
      beforeEach(() => {
        jest.spyOn(wrapper.vm, '$emit')
        wrapper.findAll('a').at(1).trigger('click')
      })

      it('emits "sign-up"', () => {
        expect(wrapper.vm.$emit).toHaveBeenCalledWith('sign-up')
      })
    })
  })
})
