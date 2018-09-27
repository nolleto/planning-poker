const getFirstError = (errors, field) => {
  return errors &&
    errors[field] &&
    errors[field][0]
}

const isObjectEmtpy = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

function flagFromField (field, flag) {
  return this.fields && this.fields[field] && this.fields[field][flag]
}

function fieldHasValidated (field) {
  return flagFromField.call(this, field, 'dirty') || flagFromField.call(this, field, 'validated')
}

function fieldIsValid (field) {
  return (fieldHasValidated.call(this, field) && flagFromField.call(this, field, 'valid')) || false
}

function fieldIsInvalid (field) {
  return (fieldHasValidated.call(this, field) && flagFromField.call(this, field, 'invalid')) || false
}

function getFieldError (field, errors) {
  return this.errors.first(field) || getFirstError(errors, field)
}

function getFieldState (field, errors) {
  if (fieldIsInvalid.call(this, field) || getFirstError(errors, field)) return 'invalid'
  else if (fieldIsValid.call(this, field)) return 'valid'
}

function formHasErrors (errors = {}) {
  return this.errors.any() || !isObjectEmtpy(errors)
}
export default {
  fieldIsValid,
  fieldIsInvalid,
  getFieldError,
  getFieldState,
  formHasErrors
}
