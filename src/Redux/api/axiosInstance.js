import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.example.com/api",
    headers: {
        'Content-Type': 'application/json',
    }
})