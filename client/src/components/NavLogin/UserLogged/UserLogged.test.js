import UserLogged from './index'
import { shallowMount } from '@vue/test-utils'

const defaultProps = {
  username: 'Mauricio da Silva'
}

const shallowComponent = (opts = { propsData: defaultProps }) => {
  return shallowMount(UserLogged, opts)
}

describe('UserLogged component', () => {
  let wrapper

  describe('Snapshots', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    describe('When is not expanded', () => {
      beforeAll(() => {
        wrapper.setData({ ui: { expanded: false } })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When is expanded', () => {
      beforeAll(() => {
        wrapper.setData({ ui: { expanded: true } })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })
  })

  describe('Event Listeners', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    describe('When clicked in "Sign out" link', () => {
      beforeEach(() => {
        jest.spyOn(wrapper.vm, '$emit')
        wrapper.findAll('a').at(1).trigger('click')
      })

      it('emits "sign-out"', () => {
        expect(wrapper.vm.$emit).toHaveBeenCalledWith('sign-out')
      })
    })
  })
})
