import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Home = () => {
    // const { user } = useContext(AuthContext)
    // return <div>{user && <h1>Home</h1>}</div>
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
