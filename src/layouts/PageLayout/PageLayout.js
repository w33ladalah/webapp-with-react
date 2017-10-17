import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import '../../styles/scss/main.scss'

export const PageLayout = ({ children }) => (
  <div style={{ height: 100 + '%' }}>
    <header className="header banner navbar-mobile--show-x">
      <nav className="navbar navbar-main">
        <div className="container max-w-xxl">
          <a className="navbar-brand brand" href="/">
            WebAPP
          </a>
          <div className="d-flex flex-row ml-auto mr-0">
            <ul className="nav navbar-nav navbar-desktop-only navbar-nav--primary">
              <li className="nav-item menu-item"><Link to="/signin" className="nav-link">Sign In</Link></li>
              <li className="nav-item menu-item my-account"><Link to="/" className="nav-link">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main className="main bg-light">
      {children}
    </main>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
