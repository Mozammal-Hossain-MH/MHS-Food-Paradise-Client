import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://mhs-food-paradise-server.vercel.app'
})

const useAxiosPublic = () => {
    
    return axiosPublic;

};

export default useAxiosPublic;