import React, { useState, useEffect } from 'react'
import { getOrganizations } from '../../fetchFunctions'
import OrganizationTable from './OrganizationTable'

const Organizations = () => {
    const [organizationData, setOrganizationData] = useState([])

    const [errorsPresent, setErrorsPresent] = useState(false)
    const [errors, setErrors] = useState([])

    const reloadOrgs = async () => {
        getOrganizations()
            .then((response) => {
                if (response) {
                    setOrganizationData(response)
                } else {
                    //////console.log('We got a problem houston')
                }
            })
    }

    useEffect(() => {

        getOrganizations()
            .then((response) => {
                if (response) {
                    setOrganizationData(response)
                } else {
                    //////console.log('We got a problem houston')
                }
            })
    }, [])



    return (
        <div>
            <OrganizationTable reloadOrgs={reloadOrgs} data={organizationData} />

        </div>
    )
}

export default Organizations
