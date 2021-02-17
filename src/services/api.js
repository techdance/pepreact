import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
})

API.CancelToken = axios.CancelToken
API.isCancel = axios.isCancel

/*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 */
API.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('growth-token') != null ? localStorage.getItem('growth-token') : null;

        if (token != null) {
            // config.headers['Authorization'] = `Bearer ${ token }`
        }

        return config
    },

    (error) => {
        return Promise.reject(error)
    }
);


// Vue.prototype.$API = API;

export default API;
