import React, {useState} from 'react'
import {Paper} from '@mui/material'
import OrganizationDetailsDialog from './OrganizationDetailsDialog'


const OrganizationTableRow = ({item, header=false, reloadOrgs}) => {


    const [detailsActive, setDetailsActive] = useState(false)


    return (
        <>
        {header ? null : <OrganizationDetailsDialog reloadOrgs={reloadOrgs} data={item} active={detailsActive} handleClose={()=>{setDetailsActive(false)}} />}
        <li onClick={()=> {setDetailsActive(true)}} id={header ? 'header' : item.id} key={header ? 'header' : item.id} >

            <Paper
                elevation={1}
                sx={{
                    width: "76vw",
                    height: '6vh',
                    // left: '4vw'
                }}
                className='table-row'>
                <div className={'col8 data-entry' + (header ? ' table-header' : '')}>
                    {header ? "Org. Name" : item.name}
                </div>
                <div className={'col9 data-entry' + (header ? ' table-header' : '')}>
                {header ? "Number of Contacts" : item.contact_count}
                </div>
            </Paper>
        </li>
        </>
    )
}

export default OrganizationTableRow
