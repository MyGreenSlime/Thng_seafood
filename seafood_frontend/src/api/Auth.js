import config from './config'
import axios from "axios"
let connect = config
let repo = 'user/'
export default {
    register(email, password, firstName, lastName, mobilePhone, role = 1) {
        // let result = await axios.post('localhost:3001/api/user/register', data)
        let result = connect.post(`${repo}register`, {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: password,
            MobilePhone: mobilePhone,
            Role: role
        }).then((res) => {
            return res
        }).catch((err) => {
            return { status: false, message: err }
        })
        return result
    },
    login(email, password) {
        // let result = await axios.post('localhost:3001/api/user/register', data)
        let result = connect.post(`${repo}login`, { Email: email, Password: password }).then((res) => {
            res = res.data
            console.log(res.payload.Token)
            let token = res.payload.Token
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            console.log(axios.headers)
            return res
        }).catch((err) => {
            return { status: false, message: err }
        })
        return result
    }

}