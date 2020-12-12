import axios from 'axios'

const instance = axios.create({
    baseurl:'http://localhost:9000'
})

export default instance;