import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";


const useBookings = () => {
    const axiosSecure = useAxiosSecure();
    const { user,loading } = useAuthContext();

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/reservation/${user.email}`)
            return res.data;
        }
    })
    return [bookings, refetch]
};

export default useBookings;