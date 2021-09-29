import React, {useState, useEffect} from 'react'
import { getContacts } from '../../fetchFunctions'
import ContactTable from './ContactTable'

const Contacts = () => {

    const [contactData, setContactData] = useState([])

    const [errorsPresent, setErrorsPresent] = useState(false)
    const [errors, setErrors] = useState([])
 
    const reloadContacts = ( ) => {
        getContacts()
        .then((response) => {
            if (response) {
                setContactData(response)
            } else {
                //console.log('We got a problem houston')
            }
        })
    }

    useEffect(()=> {

        getContacts()
        .then((response) => {
            if (response) {
                setContactData(response)
            } else {
                //console.log('We got a problem houston')
            }
        })
    }, [])



    return (
        <div>
             <ContactTable reloadContacts={reloadContacts} data={contactData} /> 
        </div>
    )
}

export default Contacts
