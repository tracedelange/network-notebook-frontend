const baseURL = 'http://localhost:3001/'
const dev = true

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {capitalize}
export { baseURL }
export { dev }