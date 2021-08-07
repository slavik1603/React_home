import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from './components/Navibar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Books } from './pages/Books'

function App() {
    return (
        <>
            <Router>
                <NaviBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/books" component={Books} />
                </Switch>
            </Router>
        </>
    )
}

export default App
