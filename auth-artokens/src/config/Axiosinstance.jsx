import axios from 'axios';

export let axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com",
    // withCredentials:true,
})

// axiosInstance.interceptors.request.use();

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("axios instance responce=>", response)
        return response
    },
    (error)=>{
        console.log("erron in instance", error)
    }
);