import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import routes from './Routes'
import './App.scss'

import DesktopNav from './Components/DesktopNav/DesktopNav'

function App() {
  return (
    <Router>
      <div className="App">
        <DesktopNav />
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            exact
          >
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Router>
  )
}

export default App