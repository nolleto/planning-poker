import Home from './index'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(Home)
}

describe('Home component', () => {
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

    describe('When clicked in "Click here for something" button', () => {
      let onClick

      beforeEach(() => {
        onClick = jest.fn()
        wrapper.setMethods({ onClick })
        wrapper.find('button').trigger('click')
      })

      it('calls #onClick', () => {
        expect(onClick).toHaveBeenCalled()
      })
    })
  })

  describe('Methods', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    describe('#onClick', () => {
      beforeEach(() => {
        global.window.alert = jest.fn()
        wrapper.vm.onClick()
      })

      it('calls window.alert() with "something"', () => {
        expect(window.alert).toHaveBeenCalledWith('something')
      })
    })
  })
})
