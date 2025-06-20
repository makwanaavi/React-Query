import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com" // fixed typo and removed space
})

export const fetchPosts = async () => {
    const res = await api.get("/posts?_limit= 5")
    return res.status === 200 ? res.data : []
}           