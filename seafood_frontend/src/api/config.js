import axios from 'axios'


let host = 'http://localhost:3001'
let baseURL = `${host}/api/`

// export default axios.create(
//     baseURL
// )
axios.defaults.baseURL = baseURL
export default axios