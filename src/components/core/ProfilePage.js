import { Paper } from '@mui/material'
import React from 'react'


//do a call to the back end and determine if any user is currently logged in through baseURLme
const ProfilePage = ({ userInfo }) => {
    return (
        <div>
            <Paper elevation={2}
                sx={{
                    position: 'relative',
                    backgroundColor: '#ECFEF8',
                    width: '56vw',
                    left: '20vw',
                    height: '76vh',
                    top: '4vh'
                }}

            >

            </Paper>

        </div>
    )
}

export default ProfilePage
