import axios from "axios";

const api = axios.create({
    BaseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    setTimeout: 8000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})