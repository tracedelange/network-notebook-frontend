export const getContacts = async () => {


    const method = "GET"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`/contacts`, { method: method, withCredentials: true, headers: headers })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        console.log(response)
        console.log("Profile Creation Failed")
        return response
    }

}

export const getOrganizations = async () => {

    const method = "GET"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`/organizations`, { method: method, withCredentials: true, headers: headers })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        console.log(response)
        console.log("Profile Creation Failed")
        return response
    }

}


export const submitContact = async (contact) => {

    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`/contacts`, { method: method, withCredentials: true, headers: headers, body: JSON.stringify(contact) })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        console.log(response)
        console.log("Contact Post Failed")
        return response
    }

}
