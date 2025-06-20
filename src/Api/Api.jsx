import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com" // fixed typo and removed space
})

export const fetchPosts = () => {
    return api.get("/posts")
}   