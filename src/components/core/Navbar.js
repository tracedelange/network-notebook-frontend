import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import menuIcon from '../../assets/menu.png'
import Sidebar from '../core/Sidebar'

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
                <h1 id='main-header'>Network Notebook</h1>
                {/* <div id='inner-container'> */}
                {/* </div> */}
            </div>
        </Paper>
    )
}

export default Navbar
