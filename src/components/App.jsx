import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ShowerOverview from './ShowerOverview'
import ShowerDetail from './ShowerDetail'

const App = () => (
    <Router>
        <div>
            <Route exact path='/' component={ShowerOverview}/>
            <Route path='/shower/:id' component={ShowerDetail}/>
        </div>
    </Router>
)

export default App