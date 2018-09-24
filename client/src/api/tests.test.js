import { TEST } from '../constants/api'
import services from '../services/http'
import { test } from './tests'

describe('auth service', () => {
  describe('test', () => {
    const response = {
      data: {
        status: 'Hello world'
      }
    }

    describe('When is successfully', () => {
      let data

      beforeAll(async () => {
        services.get = jest.fn(async () => response)
        data = await test()
      })

      it('calls the right URL with a payload', () => {
        expect(services.get).toHaveBeenCalledWith(TEST)
      })

      it('has the right response', () => {
        expect(data).toEqual(response)
      })
    })

    describe('When has a failure', () => {
      beforeAll(() => {
        services.get = jest.fn(async () => { throw new Error() })
      })

      it('throws a error', async () => {
        await expect(test())
          .rejects
          .toThrow()
      })
    })
  })
})
