import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Form, Button } from 'semantic-ui-react'

const Login = (props) => {
    const { login } = useContext(AuthContext)
    const [error, setError] = useState(false)
    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!values.username || !values.password) {
            setError(true)
            return
        }
        setError(false)
        fetch('http://localhost:5600/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((userData) => {
                // console.log(token)
                login(userData)
                props.history.push('/')
            })
            .catch((err) => console.error(err.message))
    }

    return (
        <div className="form-container">
            <Form
                onSubmit={onSubmit}
                noValidate
                // className={loading ? 'loading' : ''}
            >
                <h1>LOGIN</h1>
                <Form.Input
                    label="Username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    value={values.username}
                    onChange={onChange}
                />
                <Form.Input
                    label="Password"
                    placeholder="Password.."
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={onChange}
                />
                <Button type="submit" primary>
                    LOGIN
                </Button>
            </Form>

            {error ? (
                <div className="ui error message">
                    <ul className="list">
                        <li>username or password cannot be empty</li>
                    </ul>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}

export default Login
