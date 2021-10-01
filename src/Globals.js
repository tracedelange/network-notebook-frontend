
const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const baseURL = 'https://network-notebook-backend.herokuapp.com'
// const baseURL = 'http://localhost:3001'

export {baseURL}
export {capitalize}