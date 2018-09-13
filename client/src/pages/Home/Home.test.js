import * as testApi from '../../api/tests'
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
      let testApi

      beforeEach(() => {
        testApi = jest.fn()
        wrapper.setMethods({ testApi })
        wrapper.find('button').trigger('click')
      })

      it('calls #testApi', () => {
        expect(testApi).toHaveBeenCalled()
      })
    })
  })

  describe('Methods', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    describe('#testApi', () => {
      beforeEach(() => {
        window.alert = jest.fn()
        testApi.test = jest.fn(async () => {})
        wrapper.vm.testApi()
      })

      it('calls #test method from test API', () => {
        expect(testApi.test).toHaveBeenCalled()
      })
    })
  })
})
