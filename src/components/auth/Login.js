import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core'
import { baseURL } from '../../Globals';

const Login = ({ updateUserState }) => {

    const [loginCreds, setLoginCreds] = useState({
        username: '',
        password: ''
    })

    const [blankPresent, setBlankPresent] = useState(true)
    const [errors, setErrors] = useState({})

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const method = "POST"
        const headers = { "Content-Type": "application/json" }
        const body = loginCreds
        const response = await fetch(`${baseURL}/login`, { method: method, withCredentials: true, headers: headers, body: JSON.stringify(body) })
        const data = await response.json()


        if (response.ok) {

            updateUserState(data)
            setErrors({})
            //////console.log(data)
        } else {
            setErrors(data)
        }


    }

    const handleFormChange = (e) => {
        // //////console.log(e.target.value)
        // //////console.log(e.target.name)

        setLoginCreds({
            ...loginCreds,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (Object.values(loginCreds).some((e) => e === "")) {
            setBlankPresent(true)
        } else {
            setBlankPresent(false)
        }
    }, [loginCreds])

    

    return (
        <Paper elevation={2}
            sx={{
                position: 'relative',
                backgroundColor: '#ECFEF8',
                width: '36vw',
                left: '30vw',
                height: '76vh',
                top: '4vh'
            }}

        >
            <div className='login'>
                <h1>User Login</h1>


                <form id="login-form" onSubmit={handleLoginSubmit}>

                    <TextField
                        id="outlined-basic"
                        label="Username"
                        value={loginCreds.username}
                        name="username"
                        onChange={handleFormChange}
                        variant="outlined"
                        sx={{
                            width: '50%',
                            left: '25%',
                            marginTop: '5%',
                            marginBottom: '5%'
                        }}
                    />

                    <TextField
                        id="outlined-basic"
                        type='password'
                        label="Password"
                        value={loginCreds.password}
                        name="password"
                        onChange={handleFormChange}
                        variant="outlined"
                        sx={{
                            width: '50%',
                            left: '25%',
                            marginBottom: '5%'
                        }}
                    />

                    <Button
                        type='submit'
                        disabled={blankPresent ? true : false}
                        variant="outlined"
                        style={{
                            width: '50%',
                            left: '25%',
                            marginBottom: '5%'
                        }}
                    >Submit</Button>

                </form>

                <span id='no-account'>No Account? <Link to='/signup'>Register</Link></span>
                <h3 className='reminder'>Usernames are case-sensitive</h3>
                {errors ? 
                <>
                    <h2 className='error'>{errors.errors}</h2>
                </>
                :
                null
                }
                {/* <h2>Login failed!</h2> */}
            </div>
        </Paper>
    )
}

export default Login
