import fetch from 'isomorphic-fetch'
import { RequestError } from '../libs/error/http'

export class RequestService {
  constructor(opts) {
    this.opts = opts
  }

  async _doRequest(url, params={}) {
    try {
      const defaultParams = {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        ...params
      }
      const req = await this.opts.fetch(url, defaultParams)
      return await req.json()
    } catch (err) {
      throw new RequestError(err.message)
    }
  }

  async post(url, data = {}) {
    try {
      return await this._doRequest(url, {
        method: 'POST',
        body: JSON.stringify(data),
      })
    } catch (err) {
      throw new RequestError(err.message)
    }
  }

  async get(url) {
    try {
      return await this._doRequest(url)
    } catch (err) {
      throw new RequestError(err.message)
    }
  }
}

export default new RequestService({
  fetch
})
