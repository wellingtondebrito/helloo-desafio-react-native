import axios from 'axios'

export const api = axios.create({
    baseURL:"https://us-central1-app-helloo.cloudfunctions.net/app/api/auth"
})