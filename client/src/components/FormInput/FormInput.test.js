import FormInput from './index'
import { shallowMount } from '@vue/test-utils'

const defaultProps = {
  name: 'username'
}

const shallowComponent = (opts = { propsData: defaultProps }) => {
  return shallowMount(FormInput, opts)
}

describe('FormInput component', () => {
  let wrapper

  describe('Lifecycle', () => {
    describe('#mounted', () => {
      beforeAll(() => {
        wrapper = shallowComponent({
          propsData: {
            name: 'username',
            value: 'initial value'
          }
        })
      })

      it('set in $el "value" prop', () => {
        expect(wrapper.vm.$el.value).toBe('initial value')
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

    describe('When has "invalid" state', () => {
      beforeAll(() => {
        wrapper.setProps({ state: 'invalid', error: 'username invalid' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When has "valid" state', () => {
      beforeAll(() => {
        wrapper.setProps({ state: 'valid' })
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

    describe('When input changed', () => {
      beforeAll(() => {
        const input = wrapper.find('input')

        jest.spyOn(wrapper.vm, '$emit')
        input.element.value = 'value'
        input.trigger('input')
      })

      it('emits "input" with value', () => {
        expect(wrapper.vm.$emit).toHaveBeenCalledWith('input', 'value')
      })
    })
  })

  describe('Methods', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    describe('#listeners', () => {
      it('has "input" listener', () => {
        expect(wrapper.vm.listeners.input).toBeTruthy()
      })
    })
  })
})
