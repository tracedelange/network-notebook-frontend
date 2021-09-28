import React from 'react'
import { Divider, Paper } from '@mui/material'

const ContactTable = ({data}) => {


    const ContactData = data.map((item) => (
        <li key={item.id} >
            <Paper
            elevation={1}
            sx={{
                width: "76vw",
                height: '6vh',
                // left: '4vw'
            }}
            className='table-row'>
                <div className='col1 data-entry'>
                    {item.firstname}
                </div>
                <div className='col2 data-entry'>
                    {item.lastname}
                </div>
                <div className='col3 data-entry'>
                    {item.organization.name}
                </div>



            </Paper>
            {/* {item.firstname}   {item.lastname} {item.organization.name} */}
        </li>
    )) 

    return (
        <div>
            <Paper
                elevation={2}
                sx={{
                    position: 'absolute',
                    width: "84vw",
                    left: '6vw',
                    top: '2vh',
                    height: "80vh",
                    backgroundColor: '#ECFEF8'
                }}>
                    <h2 className='data-header'>Contacts</h2>
                    <Divider />
                    <div className='data-table-container'>
                        <ul className='data-table'>
                            {ContactData}
                        </ul>
                    </div>



            </Paper>
        </div>
    )
}

export default ContactTable

