import NavLogin from './index'
import { shallowMount } from '@vue/test-utils'
import UserLogged from './UserLogged'
import UserNotLogged from './UserNotLogged'

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

      describe('When UserLogged emitted "sign-out"', () => {
        beforeEach(() => {
          jest.spyOn(wrapper.vm, '$emit')
          wrapper.find(UserLogged).vm.$emit('sign-out')
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

      describe('When UserNotLogged emitted "sign-in"', () => {
        beforeEach(() => {
          jest.spyOn(wrapper.vm, '$emit')
          wrapper.find(UserNotLogged).vm.$emit('sign-in')
        })

        it('emits "sign-in"', () => {
          expect(wrapper.vm.$emit).toHaveBeenCalledWith('sign-in')
        })
      })

      describe('When UserNotLogged emitted "sign-up"', () => {
        beforeEach(() => {
          jest.spyOn(wrapper.vm, '$emit')
          wrapper.find(UserNotLogged).vm.$emit('sign-up')
        })

        it('emits "sign-up"', () => {
          expect(wrapper.vm.$emit).toHaveBeenCalledWith('sign-up')
        })
      })
    })
  })
})
