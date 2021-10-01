import React, {useState, useEffect} from 'react'
import { getContacts } from '../../fetchFunctions'
import ContactTable from './ContactTable'

const Contacts = ({userToken}) => {

    const [contactData, setContactData] = useState([])

    const [errorsPresent, setErrorsPresent] = useState(false)
    const [errors, setErrors] = useState([])
 
    const reloadContacts = (userToken) => {
        getContacts(userToken)
        .then((response) => {
            if (response) {
                setContactData(response)
            } else {
                console.log('We got a problem houston')
            }
        })
    }

    useEffect(()=> {

        getContacts(userToken)
        .then((response) => {
            if (response) {
                setContactData(response)
            } else {
                console.log('We got a problem houston')
            }
        })
    }, [])

    //console.log(contactData)

    return (
        <div>
             <ContactTable userToken={userToken} reloadContacts={reloadContacts} data={contactData} /> 
        </div>
    )
}

export default Contacts
