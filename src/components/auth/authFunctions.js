import { baseURL } from "../../Globals"
export const checkIfUserLoggedIn = async (userToken) => {

    const method = "GET"
    const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${userToken}` }
    const response = await fetch(`${baseURL}/me`, {
        method: method,
        withCredentials: true,
        headers: headers,
    })
    const data = await response.json()
    // //////console.log(response)
    if (response.ok) {
        return data
    } else {
        //////console.log("No user logged in.")
    }

}


export const logoutUser = async () => {

    const method = "DELETE"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/logout`, {
        method: method,
        withCredentials: true,
        headers: headers,
    })

}


export const signupUser = async (signUp) => {

    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = signUp
    const response = await fetch(`${baseURL}/signup`, { method: method, withCredentials: true, headers: headers, body: JSON.stringify(body) })
    const data = await response.json()


    return response, data



}