import { connect } from 'react-redux'
import {handleSubmit} from '../modules/home'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import HomeView from '../components/Home'

const mapDispatchToProps = {
  handleSubmit : (values) => handleSubmit(values)
}

const mapStateToProps = (state) => ({
  values: state.values
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
