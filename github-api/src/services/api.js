import axios from 'axios';

const api = axios.create( {
    baseURL: 'htts://api.github.com/',
})

export default api;