import ExtendableError from 'es6-error'

/**
 * RequestError
 */
export class RequestError extends ExtendableError {
  /**
   * RequestError constructor
   *
   * @param message
   * @param httpStatus
   * @param previousError
   */
  constructor(message, httpStatus, previousError) {
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
  RequestError,
}
