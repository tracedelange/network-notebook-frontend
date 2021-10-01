import React, {useState, useEffect} from 'react'
import { Divider, Paper } from '@mui/material'
import ContactTableRow from './ContactTableRow';
import AddContactFormDialog from '../data/AddContactFormDialog'
import { getOrganizations } from '../../fetchFunctions';


const ContactTable = ({ data, reloadContacts, userToken }) => {


    const [organizations, setOrganizations] = useState({})
    const [dataLoaded, setDataLoaded] = useState(false)
    useEffect(()=> {
        getOrganizations(userToken)
        .then(data => {
            setOrganizations(data)
            setDataLoaded(true)
        })
    }, [])
    
    
    const ContactData = data.map((item) => <ContactTableRow userToken={userToken} reloadContacts={reloadContacts} orgs={organizations} key={item.id} item={item} />)
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
                    <h2 className='data-header'>Contacts</h2>
                    {dataLoaded ? <AddContactFormDialog userToken={userToken} reloadContacts={reloadContacts} orgs={organizations} data={data} /> : null}
                </div>
                {/* <img src={plusIcon} className='add-new-contact-img' alt='Add New Contact' /> */}
                <Divider />
                <div className='data-table-container'>
                    <ul className='data-table'>
                        <ContactTableRow item={{}} header={true} />
                        {ContactData}
                    </ul>
                </div>



            </Paper>
        </div>
    )
}

export default ContactTable

