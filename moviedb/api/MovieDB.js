import axios from 'axios'

const KEY = "94bbde36ee11cee4e4bfa34542bb3a96"

export default axios.create({
        baseURL: "https://api.themoviedb.org/3",
        params: {
            api_key: KEY,
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
