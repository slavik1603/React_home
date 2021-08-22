import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from './components/Navibar'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Category } from './pages/Category'
import { About } from './pages/About'
import { Books } from './pages/Books'
import { ParishLife } from './pages/ParishLife'

function App() {
    return (
        <>
            <Router>
                <NaviBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/category" component={Category} />
                    <Route path="/about" component={About} />
                    <Route path="/books" component={Books} />
                    <Route path="/parishLife" component={ParishLife} />
                </Switch>
            </Router>
            <Footer />
        </>
    )
}

export default App
