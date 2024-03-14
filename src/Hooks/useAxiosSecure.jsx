import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = useAuthContext();

    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(config => {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `bearer ${token}`
        return config;
    }, error => {
        // do something with request error
        return Promise.reject(error);
    })


    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(response => {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // for 401 and 403 status logout the user and move user to login page
        if (status === 401 || status === 403) {
            await logout();
            navigate('/login');
        }
        console.log('error in the interceptor', status);
        return Promise.reject(error);
    })

    return axiosSecure

};

export default useAxiosSecure;