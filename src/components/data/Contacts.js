import React, {useState, useEffect} from 'react'
import { getContacts } from '../../assets/fetchFunctions'
import ContactTable from './ContactTable'

const Contacts = () => {

    const [contactData, setContactData] = useState([])

    const [errorsPresent, setErrorsPresent] = useState(false)
    const [errors, setErrors] = useState([])
 


    useEffect(()=> {

        getContacts()
        .then((response) => {
            if (response) {
                setContactData(response)
            } else {
                console.log('We got a problem houston')
            }
        })
    }, [])

    console.log(contactData)


    return (
        <div>
             <ContactTable data={contactData} /> 
        </div>
    )
}

export default Contacts
