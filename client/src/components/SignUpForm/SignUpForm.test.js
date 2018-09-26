import SignUpForm from './index'
import { shallowMount } from '@vue/test-utils'

const defaultProps = {
  isLoading: false,
  getErrorByName: () => ''
}

const shallowComponent = (opts = { propsData: defaultProps }) => {
  return shallowMount(SignUpForm, opts)
}

describe('SignUpForm component', () => {
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
            username: 'admin',
            email: 'admin@example.com',
            password: 123456,
            passwordConfirmation: 123456
          }
        })
        wrapper.vm.processForm()
      })

      it('emits "sign-up" with payload', () => {
        expect(wrapper.vm.$emit).toHaveBeenCalledWith(
          'sign-up',
          {
            username: 'admin',
            email: 'admin@example.com',
            password: 123456,
            passwordConfirmation: 123456
          }
        )
      })
    })
  })
})
