import methods from './methods'

const mockFields = (field, flags = {}) => ({
  fields: {
    [field]: {
      touched: false,
      untouched: false,
      dirty: false,
      pristine: false,
      valid: false,
      invalid: false,
      pending: false,
      validated: false,
      changed: false,
      ...flags
    }
  }
})

const mockErrors = (error, any = false) => ({
  errors: {
    first: () => error,
    any: () => any
  }
})

describe('validator mixin - methods', () => {
  const fieldName = 'field'

  describe('#fieldIsValid', () => {
    describe('When field has "dirty" flag', () => {
      const flags = { dirty: true }
      let result

      describe('and "valid" flag as "true"', () => {
        beforeAll(() => {
          result = methods.fieldIsValid.call(
            mockFields(fieldName, { ...flags, valid: true }),
            fieldName
          )
        })

        it('returns "true"', () => {
          expect(result).toBeTruthy()
        })
      })

      describe('and "valid" flag as "false"', () => {
        beforeAll(() => {
          result = methods.fieldIsValid.call(
            mockFields(fieldName, { ...flags, valid: false }),
            fieldName
          )
        })

        it('returns "false"', () => {
          expect(result).toBeFalsy()
        })
      })
    })

    describe('When field has "validated" flag', () => {
      const flags = { validated: true }
      let result

      describe('and "valid" flag as "true"', () => {
        beforeAll(() => {
          result = methods.fieldIsValid.call(
            mockFields(fieldName, { ...flags, valid: true }),
            fieldName
          )
        })

        it('returns "true"', () => {
          expect(result).toBeTruthy()
        })
      })

      describe('and "valid" flag as "false"', () => {
        beforeAll(() => {
          result = methods.fieldIsValid.call(
            mockFields(fieldName, { ...flags, valid: false }),
            fieldName
          )
        })

        it('returns "false"', () => {
          expect(result).toBeFalsy()
        })
      })
    })
  })

  describe('#fieldIsInvalid', () => {
    describe('When field has "dirty" flag', () => {
      const flags = { dirty: true }
      let result

      describe('and "invalid" flag as "true"', () => {
        beforeAll(() => {
          result = methods.fieldIsInvalid.call(
            mockFields(fieldName, { ...flags, invalid: true }),
            fieldName
          )
        })

        it('returns "true"', () => {
          expect(result).toBeTruthy()
        })
      })

      describe('and "invalid" flag as "false"', () => {
        beforeAll(() => {
          result = methods.fieldIsInvalid.call(
            mockFields(fieldName, { ...flags, invalid: false }),
            fieldName
          )
        })

        it('returns "false"', () => {
          expect(result).toBeFalsy()
        })
      })
    })

    describe('When field has "validated" flag', () => {
      const flags = { validated: true }
      let result

      describe('and "invalid" flag as "true"', () => {
        beforeAll(() => {
          result = methods.fieldIsInvalid.call(
            mockFields(fieldName, { ...flags, invalid: true }),
            fieldName
          )
        })

        it('returns "true"', () => {
          expect(result).toBeTruthy()
        })
      })

      describe('and "invalid" flag as "false"', () => {
        beforeAll(() => {
          result = methods.fieldIsInvalid.call(
            mockFields(fieldName, { ...flags, invalid: false }),
            fieldName
          )
        })

        it('returns "false"', () => {
          expect(result).toBeFalsy()
        })
      })
    })
  })

  describe('#getFieldError', () => {
    let result

    describe('When field has error', () => {
      beforeAll(() => {
        result = methods.getFieldError.call(
          mockErrors('Field error')
        )
      })

      it('returns the field error', () => {
        expect(result).toBe('Field error')
      })

      describe('and has another error', () => {
        beforeAll(() => {
          result = methods.getFieldError.call(
            mockErrors('Field error'),
            fieldName,
            { [fieldName]: ['Server error'] }
          )
        })

        it('returns the field error', () => {
          expect(result).toBe('Field error')
        })
      })
    })

    describe('When field has no error', () => {
      beforeAll(() => {
        result = methods.getFieldError.call(
          mockErrors()
        )
      })

      it('returns "undefined"', () => {
        expect(result).toBe(undefined)
      })

      describe('and has another error', () => {
        beforeAll(() => {
          result = methods.getFieldError.call(
            mockErrors(),
            fieldName,
            { [fieldName]: ['Server error'] }
          )
        })

        it('returns another error', () => {
          expect(result).toBe('Server error')
        })
      })
    })
  })

  describe('#getFieldState', () => {
    let result

    describe('When field is "invalid"', () => {
      let fieldIsInvalid

      beforeAll(() => {
        fieldIsInvalid = methods.fieldIsInvalid.call
        methods.fieldIsInvalid.call = () => true
        result = methods.getFieldState()
      })

      it('returns "invalid"', () => {
        expect(result).toBe('invalid')
      })

      afterAll(() => {
        methods.fieldIsInvalid.call = fieldIsInvalid
      })
    })

    describe('When field has another error', () => {
      beforeAll(() => {
        result = methods.getFieldState(
          fieldName,
          { [fieldName]: ['Some error'] }
        )
      })

      it('returns "invalid"', () => {
        expect(result).toBe('invalid')
      })
    })

    describe('When field is "valid"', () => {
      let fieldIsValid

      beforeAll(() => {
        fieldIsValid = methods.fieldIsValid.call
        methods.fieldIsValid.call = () => true
        result = methods.getFieldState()
      })

      it('returns "valid"', () => {
        expect(result).toBe('valid')
      })

      afterAll(() => {
        methods.fieldIsValid.call = fieldIsValid
      })
    })

    describe('When field is not "valid" and "invalid"', () => {
      beforeAll(() => {
        result = methods.getFieldState()
      })

      it('returns "undefined"', () => {
        expect(result).toBe(undefined)
      })
    })
  })

  describe('#formHasErrors', () => {
    let result

    describe('When form has errors', () => {
      beforeAll(() => {
        result = methods.formHasErrors.call(
          mockErrors(null, true)
        )
      })

      it('returns "true"', () => {
        expect(result).toBeTruthy()
      })
    })

    describe('When form has no errors', () => {
      beforeAll(() => {
        result = methods.formHasErrors.call(
          mockErrors()
        )
      })

      it('returns "false"', () => {
        expect(result).toBeFalsy()
      })

      describe('and has another error', () => {
        beforeAll(() => {
          result = methods.formHasErrors.call(
            mockErrors(),
            { [fieldName]: ['Some Error'] }
          )
        })

        it('returns "true"', () => {
          expect(result).toBeTruthy()
        })
      })
    })
  })
})
