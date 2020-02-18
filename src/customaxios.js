import axios from "axios"
import * as constants from "./utils/constants"

const instance = axios.create({
    baseURL: constants.API_URL
})

export default instance