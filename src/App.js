import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Post from './pages/Post'
import Login from './pages/Login'
import 'semantic-ui-css/semantic.min.css'

function App() {
    return (
        <Router>
            <div className="ui container">
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/post" component={Post} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    )
}

export default App
