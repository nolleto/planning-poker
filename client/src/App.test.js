import App from './App.vue'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Router from 'vue-router'

const shallowComponent = () => {
  return shallowMount(App)
}

describe('App component', () => {
  let wrapper

  beforeAll(() => {
    Vue.use(Router)
  })

  describe('Snapshots', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    it('matches', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
