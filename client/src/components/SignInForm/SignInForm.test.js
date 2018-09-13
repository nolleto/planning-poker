import SignInForm from './index'
import { shallowMount } from '@vue/test-utils'

const defaultProps = {
  isLoading: false
}

const shallowComponent = (opts = { propsData: defaultProps }) => {
  return shallowMount(SignInForm, opts)
}

describe('SignInForm component', () => {
  let wrapper

  describe('Snapshots', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    it('matches', () => {
      expect(wrapper.element).toMatchSnapshot()
    })

    describe('When is loading', () => {
      beforeAll(() => {
        wrapper.setProps({ isLoading: true })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When is there is a error', () => {
      beforeAll(() => {
        wrapper.setProps({ isLoading: false, error: 'Login invalid!' })
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

    describe('When form submit', () => {
      beforeAll(() => {
        jest.spyOn(wrapper.vm, 'processForm')
        wrapper.find('form').trigger('submit')
      })

      it('calls #processForm method', () => {
        expect(wrapper.vm.processForm).toHaveBeenCalled()
      })
    })
  })

  describe('Methods', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    describe('#processForm', () => {
      beforeAll(() => {
        jest.spyOn(wrapper.vm, '$emit')
        wrapper.vm.userOrEmail = 'user@example.com'
        wrapper.setData({
          form: {
            userOrEmail: 'user@example.com',
            password: 123456
          }
        })
        wrapper.vm.processForm()
      })

      it('emits "sign-in" with payload', () => {
        expect(wrapper.vm.$emit).toHaveBeenCalledWith(
          'sign-in',
          { userOrEmail: 'user@example.com', password: 123456 }
        )
      })
    })
  })
})
