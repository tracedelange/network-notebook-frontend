import React, { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router'
import {Link } from 'react-router-dom'
import { baseURL } from '../../Globals'
import { signupUser } from './authFunctions'
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { Button } from '@material-ui/core'


const Signup = ({ handleSignUp }) => {

    const history = useHistory()

    const [signUp, setSignUp] = useState({
        password: "",
        username: '',
        confirmation: ''
    })
    const [blankPresent, setBlankPresent] = useState(true)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (Object.values(signUp).some((e) => e === "")) {
            setBlankPresent(true)
        } else {
            setBlankPresent(false)
        }
    }, [signUp])

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
            <div className='signup'>

                <h1>Sign Up</h1>

                <form onSubmit={(e) => handleSignUp(e, signUp)}>
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        value={signUp.username}
                        name="username"
                        onChange={handleChange}
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
                        value={signUp.password}
                        name="password"
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                            width: '50%',
                            left: '25%',
                            marginBottom: '5%'
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        type='password'
                        label="Confirm Password"
                        value={signUp.confirmation}
                        name="confirmation"
                        onChange={handleChange}
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

                    <span id='no-account'>Already have an Account? <Link to='/login'>Login</Link></span>
                </form>


            </div>
        </Paper>
    )
}

export default Signup

// const handleLoginSubmit = async (e) => {
//     e.preventDefault()
//     const method = "POST"
//     const headers = { "Content-Type": "application/json" }
//     const body = loginCreds
//     const response = await fetch(`${baseURL}login`, { method: method, headers: headers, body: JSON.stringify(body) })
//     const data = await response.json()


//     console.log(data)
// }