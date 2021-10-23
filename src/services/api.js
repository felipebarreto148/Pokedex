import axios from "axios";

const api = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
});

// api.interceptors.response.use((config) => {
//     return {
//         results: config.data.results,
//         next: config.data.next
//     }
// })

export default api;