import config from './config'

describe('validator config props', () => {
  describe('#events', () => {
    it('returns "input|blur"', () => {
      expect(config.events).toBe('input|blur')
    })
  })
})
