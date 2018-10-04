import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Chapter1 from '../containers/Chapter1'
import Chapter2 from '../containers/Chapter2'
import Chapter3 from '../containers/Chapter3'

export default () => (
  <Router>
    <div className="yozora-no-okurimono">
      <Route exact path="/" component={Home} />
      <Route exact path="/chapter/1" component={Chapter1} />
      <Route exact path="/chapter/2" component={Chapter2} />
      <Route exact path="/chapter/3" component={Chapter3} />
    </div>
  </Router>
)
