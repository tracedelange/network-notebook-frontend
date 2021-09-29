import React, {useState, useEffect} from 'react'
import { Divider, Paper } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ContactTableRow from './ContactTableRow';
import plusIcon from '../../assets/add.png'
import AddContactFormDialog from '../data/AddContactFormDialog'
import ContactDetailsDialog from '../data/ContactDetailsDialog'
import { getOrganizations } from '../../fetchFunctions';


const ContactTable = ({ data, reloadContacts }) => {


    const [organizations, setOrganizations] = useState({})
    const [dataLoaded, setDataLoaded] = useState(false)
    useEffect(()=> {
        getOrganizations()
        .then(data => {
            setOrganizations(data)
            setDataLoaded(true)
        })
    }, [])
    
    
    const handleRowClick = (e) => {
        ////console.log(e.target.parentElement.parentElement.id)


    }
    
    const ContactData = data.map((item) => <ContactTableRow reloadContacts={reloadContacts} orgs={organizations} key={item.id} item={item} />)
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
                    {dataLoaded ? <AddContactFormDialog reloadContacts={reloadContacts} orgs={organizations} data={data} /> : null}
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

