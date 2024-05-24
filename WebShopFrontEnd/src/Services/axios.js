import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:443/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  login(user) {
    return api.post('/login', user).then((response) => {
      localStorage.setItem('token', response.data.token)
    })
  }
}
