import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'http://localhost:1337',
        headers: {
            'Content-Type': 'application/vnd.api+json'
        }
    })
}
