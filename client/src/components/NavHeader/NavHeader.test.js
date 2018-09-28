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

    describe('When menu is not expanded', () => {
      beforeAll(() => {
        wrapper.setData({ ui: { expanded: false } })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })

    describe('When menu is expanded', () => {
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

    describe('When clicked in home link', () => {
      beforeEach(() => {
        jest.spyOn(wrapper.vm, '$emit')
        wrapper.find('a').trigger('click')
      })

      it('emits "go-home"', () => {
        expect(wrapper.vm.$emit).toHaveBeenCalledWith('go-home')
      })
    })

    describe('When clicked in burger menu', () => {
      beforeEach(() => {
        wrapper.find('button').trigger('click')
      })

      it('toggles "ui.expanded"', () => {
        expect(wrapper.vm.ui.expanded).toBeTruthy()
      })
    })
  })
})
