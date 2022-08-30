import axios from 'axios'
const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 'AIzaSyBC3S7l2jhz9Wv1Hr2GEY15BttQp-EFZy4'
    }
})

export default  authApi