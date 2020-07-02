import React, { useContext } from 'react'
import './App.scss'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import { AuthContext, AuthProvider } from './context/authContext'

import Header from './components/Header'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Post from './pages/Post'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import 'semantic-ui-css/semantic.min.css'

function App() {
    const { user } = useContext(AuthContext)
    return (
        <AuthProvider>
            <Router>
                <div className="ui container">
                    <Header />
                    <Switch>
                        {/* {user && <Redirect to="/" />} */}
                        <Route exact path="/" component={Home} />
                        {/* {!user && <Redirect to="/login" />} */}
                        <Route path="/upload" component={Upload} />
                        <Route path="/post" component={Post} />
                        <Route path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    )
}

export default App
