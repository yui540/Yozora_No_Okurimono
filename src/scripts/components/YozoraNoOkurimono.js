import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'

export default () => (
  <Router>
    <div className="yozora-no-okurimono">
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)
