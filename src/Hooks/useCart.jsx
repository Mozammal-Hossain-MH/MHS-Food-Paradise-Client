import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthContext from "./useAuthContext";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user,loading } = useAuthContext();

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]

};

export default useCart;