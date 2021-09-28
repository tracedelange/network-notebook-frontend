import { Divider, Paper } from '@mui/material'
import React from 'react'
import { capitalize } from '../../Globals'


const Homepage = ({ userInfo }) => {


    return (
        <div>
            <Paper elevation={4}
                sx={{
                    position: 'relative',
                    backgroundColor: '#ECFEF8',
                    width: '80vw',
                    left: '8vw',
                    height: '76vh',
                    top: '4vh',
                }}

            >
                <div>
                    <h1 className='main-content-header'>
                        Welcome, {capitalize(userInfo.username)}.
                    </h1>
                    <h2 className='main-content-stats'>Your contact book contains 37 contacts spread across 10 organizations.</h2>
                    <Divider />
                </div>
                <ul className='main-content-item-list'>
                    <li>
                        Contacts
                    </li>
                    <li>
                        Organizations
                    </li>

                </ul>
            </Paper>

        </div>
    )
}

export default Homepage


