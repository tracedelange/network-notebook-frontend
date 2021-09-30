import { baseURL } from "./Globals"

export const getContacts = async () => {


    const method = "GET"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/contacts`, { method: method, withCredentials: true, headers: headers })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        //////console.log(response)
        //////console.log("Profile Creation Failed")
        return response
    }

}

export const getOrganizations = async () => {

    const method = "GET"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/organizations`, { method: method, withCredentials: true, headers: headers })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        //////console.log(response)
        //////console.log("Profile Creation Failed")
        return response
    }

}


export const submitContact = async (contact) => {

    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/contacts`, { method: method, withCredentials: true, headers: headers, body: JSON.stringify(contact) })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        //////console.log(response)
        //////console.log("Contact Post Failed")
        return response
    }

}

export const updateContact = async (contact, id) => {

    const method = "PATCH"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/contacts/${id}`, { method: method, withCredentials: true, headers: headers, body: JSON.stringify(contact) })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        //////console.log(response)
        //////console.log("Contact Update Failed")
        return response
    }

}


export const deleteContact = async (id) => {

    const method = "DELETE"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/contacts/${id}`, { method: method, withCredentials: true, headers: headers })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        //////console.log(response)
        //////console.log("Contact Update Failed")
        return response
    }

}
export const submitOrg = async (organization) => {

    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/organizations`, { method: method, withCredentials: true, headers: headers, body: JSON.stringify(organization) })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        //////console.log(response)
        //////console.log("Contact Post Failed")
        return response
    }

}

export const updateOrg = async (organization, id) => {

    const method = "PATCH"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/organizations/${id}`, { method: method, withCredentials: true, headers: headers, body: JSON.stringify(organization) })
    const data = await response.json()

    if (response.ok) {
        return data
        
    } else {
        //////console.log(response)
        //////console.log("Contact Update Failed")
        return response
    }

}


export const deleteOrg = async (id) => {

    const method = "DELETE"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/organizations/${id}`, { method: method, withCredentials: true, headers: headers })
    // const data = await response.json()

    if (response.ok) {
        return response
        
    } else {
        //////console.log(response)
        //////console.log("Contact Update Failed")
        return response
    }

}