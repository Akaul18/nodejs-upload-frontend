import React from 'react'
import './App.scss'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './context/authContext'

import Header from './components/Header'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Post from './pages/Post'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import AuthRoute from './util/AuthRoute'

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="ui container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/upload" component={Upload} />
                        <Route exact path="/post" component={Post} />
                        <AuthRoute exact path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    )
}

export default App
