import FormGroup from './index'
import { shallowMount } from '@vue/test-utils'

const shallowComponent = () => {
  return shallowMount(FormGroup)
}

describe('FormGroup component', () => {
  let wrapper

  describe('Snapshots', () => {
    beforeAll(() => {
      wrapper = shallowComponent()
    })

    it('matches', () => {
      expect(wrapper.element).toMatchSnapshot()
    })

    describe('When passing name and title props', () => {
      beforeAll(() => {
        wrapper.setProps({
          name: 'name',
          title: 'Name'
        })
      })

      it('matches', () => {
        expect(wrapper.element).toMatchSnapshot()
      })
    })
  })
})
