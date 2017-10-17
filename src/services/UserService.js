import RequestService from './RequestService'
import { registrationUrl } from '../config/endpoints'

export class UserService {
  constructor(opts) {
    this.opts = opts
  }

  async register(data) {
    return await this.opts.RequestService.post(this.opts.registrationUrl, data)
  }
}

export default new UserService({
  RequestService,
  registrationUrl,
})
