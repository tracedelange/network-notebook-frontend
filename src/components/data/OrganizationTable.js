import React from 'react'
import { Divider, Paper } from '@mui/material'
import OrganizationTableRow from './OrganizationTableRow';
import AddOrgFormDialog from './AddOrgFormDialog'


const OrganizationTable = ({ data, reloadOrgs, userToken }) => {


    const organizationData = data.map((item) => <OrganizationTableRow userToken={userToken} reloadOrgs={reloadOrgs} item={item} key={item.id} />)
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
                    backgroundColor: '#ECFEF8',
                    // overflowY: 'scroll'
                }}>
                <div className='data-header-container'>
                    <h2 className='data-header'>Organizations</h2>
                    <AddOrgFormDialog userToken={userToken} reloadOrgs={reloadOrgs} />
                </div>

                <Divider />
                <div className='data-table-container'>
                    <ul className='data-table'>
                        <OrganizationTableRow item={{}} header={true} />
                        {organizationData}
                    </ul>
                </div>



            </Paper>
        </div>
    )
}

export default OrganizationTable

