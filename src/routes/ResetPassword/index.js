import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'reset-password',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ResetPassword = require('./containers/ResetPasswordContainer').default
      const reducer = require('./modules/resetpassword').default

      injectReducer(store, { key: 'resetpassword', reducer })

      /*  Return getComponent   */
      cb(null, ResetPassword)

      /* Webpack named bundle   */
    }, 'resetpassword')
  }
})
