import React from 'react'
import Paper from '@mui/material/Paper';
import Sidebar from '../core/Sidebar'
import { Link } from 'react-router-dom'

const Navbar = ({ loggedIn, handleLogout }) => {



    return (

        <Paper
            elevation={4}
            sx={{
                position: 'absolute',
                width: '96vw',
                left: '2vw',
                height: '10vh',
                top: "2vh",
                backgroundColor: '#B2FFD6'

            }}
        >
            <div id='navbar-container'>
                {loggedIn ?
                    <Sidebar />
                    :
                    null
                }
                <Link id='main-header-link' to='/home'>
                    <h1 id='main-header'>Network Notebook</h1>
                </Link>
                {/* <div id='inner-container'> */}
                {/* </div> */}
            </div>
        </Paper>
    )
}

export default Navbar
