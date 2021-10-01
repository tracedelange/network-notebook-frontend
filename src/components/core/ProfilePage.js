import { Paper } from '@mui/material'
import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import {capitalize} from '../../Globals'
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')
 

//do a call to the back end and determine if any user is currently logged in through baseURLme
const ProfilePage = ({ userInfo, userToken }) => {
    

   //console.log(userInfo.created_at)

    const created_at = Date.parse(userInfo.created_at)
    const now = new Date() 
    const dif = now.getTime() - created_at


    const account_age = timeAgo.format(now.getTime() - dif)



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
                <div className='profile-page'>
                    <h1>Profile Information</h1>
                    <ul>
                        <li>
                            <h3>Username:</h3>
                            <h3>{capitalize(userInfo.username)}</h3>
                        </li>
                        <li>
                            <h3>Account Age:</h3>
                            <h3>{'Created ' + String(account_age)}</h3>
                        </li>
                        <li>
                            <h3>Contact Count:</h3>
                            <h3>{userInfo.stats.contact_count}</h3>
                        </li>
                        <li>
                            <h3>Organization Count:</h3>
                            <h3>{userInfo.stats.org_count}</h3>
                        </li>
                    </ul>



                </div>

            </Paper>

        </div>
    )
}

export default ProfilePage
