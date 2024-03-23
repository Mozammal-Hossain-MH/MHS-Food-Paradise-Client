import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";
import { useEffect } from "react";


const axiosSecure = axios.create({
    baseURL: 'https://mhs-food-paradise-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = useAuthContext();


    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('token from interceptor', token)
        config.headers.authorization = `bearer ${token}`
        return config;
    }, function (error) {
        // do something with request error
        return Promise.reject(error);
    })


    useEffect(() => {
        // interceptors 401 and 403 status
        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, async function (error) {
            const status = error.response.status;
            // for 401 and 403 status logout the user and move user to login page
            if (status === 401 || status === 403) {
                await logout();
                navigate('/login');
            }
            console.log('error in the interceptor', error);
            return Promise.reject(error);
        }, [])
    })

    return axiosSecure

};

export default useAxiosSecure;