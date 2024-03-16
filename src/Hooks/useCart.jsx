import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthContext from "./useAuthContext";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuthContext();
    const token = localStorage.getItem('access-token');

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            if (!token) {
                return;
            }
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]

};

export default useCart;