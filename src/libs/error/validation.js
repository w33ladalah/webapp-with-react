/* eslint-disable import/prefer-default-export */
import ExtendableError from 'es6-error'

export class ValidationError extends ExtendableError {
  constructor(message) {
    /* eslint-disable no-param-reassign */
    if (message instanceof Error) {
      previousError = message
      message = previousError.message
    }

    super(message)
    this.previousError = previousError
  }
}

export default {
  ValidationError,
}
