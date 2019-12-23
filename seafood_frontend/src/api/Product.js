import config from './config'
import axios from "axios"
let connect = config
let repo = 'product/'
export default {
        create(ProductName, ImgSrc, Weight, Catagory, Description, Price, Vendor, Provice) {
        // let result = await axios.post('localhost:3001/api/user/register', data)
        let result = connect.post(`${repo}create`, {
            ProductName: ProductName,
            ImgSrc: ImgSrc,
            Weight: Weight,
            Catagory: Catagory,
            Description: Description,
            Vendor: Vendor,
            Provice: Provice,
            Price: Price
        }).then((res) => {
            return res
        }).catch((err) => {
            return { status: false, message: err }
        })
        return result
    }

}