import SignUpForm from './index'
import VeeValidate from 'vee-validate'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'

const defaultProps = {
  isLoading: false
}

const shallowComponent = (opts = { propsData: defaultProps }) => {
  const localVue = createLocalVue()

  localVue.use(VeeValidate)

  return shallowMount(SignUpForm, {

    ...opts,
    localVue,
    mixins: [{
      methods: {
        fieldIsValid: jest.fn(() => undefined),
        fieldIsInvalid: jest.fn(() => undefined),
        getFieldError: jest.fn(() => undefined),
        getFieldState: jest.fn(() => undefined),
        formHasErrors: jest.fn(() => false)
      }
    }]
  })
}

describe('SignUpForm component', () => {
  let wrapper

  describe('Lifecycle', () => {
    describe('#created', () => {
      const emit = jest.fn()

      beforeAll(() => {
        wrapper = shallowComponent({
          propsData: defaultProps,
          mocks: {
            $emit: emit
          }
        })
        jest.spyOn(wrapper.vm, '$emit')
      })

      it('emits "clean-server-errors"', () => {
        expect(emit).toHaveBeenCalledWith('clean-server-errors')
      })
    })
  })

  describe('Snapshots', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    it('matches', () => {
      expect(wrapper.element).toMatchSnapshot()
    })

    describe('When is loading', () => {
      beforeAll(() => {
        wrapper = shallowComponent({
          propsData: {
            isLoading: true
          }
        })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When is there is a error', () => {
      beforeAll(() => {
        wrapper = shallowComponent({
          propsData: {
            ...defaultProps,
            serverErrors: {
              email: [ 'invalid' ]
            }
          }
        })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })
  })

  describe('Methods', () => {
    describe('#processForm', () => {
      describe('When form is valid', () => {
        beforeAll(() => {
          wrapper = shallowComponent()
          jest.useFakeTimers()
          jest.spyOn(wrapper.vm, '$emit')
          wrapper.vm.$validator.validateAll = jest.fn(async () => true)
          wrapper.vm.processForm()
        })

        it('calls $validator.validateAll', () => {
          expect(wrapper.vm.$validator.validateAll).toHaveBeenCalled()
        })

        describe('and finished promise', () => {
          beforeAll(() => {
            jest.runAllTimers()
          })

          it('emits "sign-up" with payload', () => {
            expect(wrapper.vm.$emit).toHaveBeenCalledWith(
              'sign-up',
              {
                email: '',
                password: '',
                passwordConfirmation: '',
                username: ''
              }
            )
          })
        })
      })

      describe('When form is invalid', () => {
        beforeAll(() => {
          wrapper = shallowComponent()
          jest.useFakeTimers()
          jest.spyOn(wrapper.vm, '$emit')
          wrapper.vm.$validator.validateAll = jest.fn(async () => false)
          wrapper.vm.processForm()
        })

        it('calls $validator.validateAll', () => {
          expect(wrapper.vm.$validator.validateAll).toHaveBeenCalled()
        })

        describe('and finished promise', () => {
          beforeAll(() => {
            jest.runAllTimers()
          })

          it('does not emits "sign-up" with payload', () => {
            expect(wrapper.vm.$emit).not.toHaveBeenCalled()
          })
        })
      })
    })
  })
})
