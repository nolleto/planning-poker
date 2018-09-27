import BaseButton from '.'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(BaseButton)
}

describe('BaseButton component', () => {
  let wrapper

  describe('Snapshots', () => {
    beforeEach(() => {
      wrapper = shallowComponent()
    })

    it('matches', () => {
      expect(wrapper.element).toMatchSnapshot()
    })

    describe('When is disabled', () => {
      beforeEach(() => {
        wrapper.setProps({ disabled: true })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When "variant" is "primary"', () => {
      beforeEach(() => {
        wrapper.setProps({ variant: 'primary' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When "variant" is "secondary"', () => {
      beforeEach(() => {
        wrapper.setProps({ variant: 'secondary' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When "variant" is "success"', () => {
      beforeEach(() => {
        wrapper.setProps({ variant: 'success' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When "variant" is "danger"', () => {
      beforeEach(() => {
        wrapper.setProps({ variant: 'danger' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When "variant" is "warning"', () => {
      beforeEach(() => {
        wrapper.setProps({ variant: 'warning' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When "variant" is "info"', () => {
      beforeEach(() => {
        wrapper.setProps({ variant: 'info' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When "variant" is "light"', () => {
      beforeEach(() => {
        wrapper.setProps({ variant: 'light' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When "variant" is "dark"', () => {
      beforeEach(() => {
        wrapper.setProps({ variant: 'dark' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When "variant" is "link"', () => {
      beforeEach(() => {
        wrapper.setProps({ variant: 'link' })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })
  })
})
