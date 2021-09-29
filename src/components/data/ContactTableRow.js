import React from 'react'
import {Paper} from '@mui/material'

const ContactTableRow = ({item, header=false}) => {

    return (

        <li key={header ? 'header' : item.id} >
            <Paper
                elevation={1}
                sx={{
                    width: "76vw",
                    height: '6vh',
                    // left: '4vw'
                }}
                className='table-row'>
                <div className={'col1 data-entry' + (header ? ' table-header' : '')}>
                    {header ? "First Name" : item.firstname}
                </div>
                <div className={'col2 data-entry' + (header ? ' table-header' : '')}>
                {header ? "Last Name" : item.lastname}
                </div>
                <div className={'col3 data-entry' + (header ? ' table-header' : '')}>
                {header ? "Organization" : item.organization ? item.organization.name : 'N/A'}
                </div>
            </Paper>
        </li>
    )
}

export default ContactTableRow
