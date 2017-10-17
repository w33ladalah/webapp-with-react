// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import HomeRoute from './Home'
import LoginRoute from './Login'
import ForgotPasswordRoute from './ForgotPassword'
import ResetPasswordRoute from './ResetPassword'

export default (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : HomeRoute(store),
  childRoutes : [
    LoginRoute(store),
    ForgotPasswordRoute(store),
    ResetPasswordRoute(store)
  ]
})
