import NavLogin from './index'
import { shallowMount } from '@vue/test-utils'

const defaultProps = {
  isUserSignedIn: false
}

const shallowComponent = (opts = { propsData: defaultProps }) => {
  return shallowMount(NavLogin, opts)
}

describe('NavLogin component', () => {
  let wrapper

  describe('Snapshots', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    describe('When user is signed', () => {
      beforeAll(() => {
        wrapper.setProps({
          isUserSignedIn: true,
          username: 'Lucas Nascimento'
        })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When user is not signed', () => {
      beforeAll(() => {
        wrapper.setProps({ isUserSignedIn: false })
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

    describe('When user is signed', () => {
      beforeAll(() => {
        wrapper.setProps({ isUserSignedIn: true })
      })

      describe('When clicked in "Sign out" link', () => {
        beforeEach(() => {
          jest.spyOn(wrapper.vm, '$emit')
          wrapper.find('a').trigger('click')
        })

        it('emits "sign-out"', () => {
          expect(wrapper.vm.$emit).toHaveBeenCalledWith('sign-out')
        })
      })
    })

    describe('When user is not signed', () => {
      beforeAll(() => {
        wrapper.setProps({ isUserSignedIn: false })
      })

      describe('When clicked in "Sign In" link', () => {
        beforeEach(() => {
          jest.spyOn(wrapper.vm, '$emit')
          wrapper.find('a').trigger('click')
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
})
