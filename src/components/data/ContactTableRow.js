import React, {useState} from 'react'
import {Paper} from '@mui/material'
import ContactDetailsDialog from '../data/ContactDetailsDialog'


const ContactTableRow = ({item, header=false, orgs, reloadContacts, userToken}) => {


    const [detailsActive, setDetailsActive] = useState(false)

    // const handleClose = () => {
    //     setDetailsActive(false)
    // }

    return (
        <>
        {header ? null : <ContactDetailsDialog userToken={userToken} reloadContacts={reloadContacts} orgs={orgs} data={item} active={detailsActive} handleClose={()=>{setDetailsActive(false)}} />}
        <li onClick={()=> {setDetailsActive(true)}} id={header ? 'header' : item.id} key={header ? 'header' : item.id} >

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
                <div className={'col4 data-entry' + (header ? ' table-header' : '')}>
                {header ? "Notes" : item.note ? item.note : 'N/A'}
                </div>
            </Paper>
        </li>
        </>
    )
}

export default ContactTableRow
