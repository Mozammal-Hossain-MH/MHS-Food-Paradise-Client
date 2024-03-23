import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuthContext from "../../../Hooks/useAuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import BookingTable from "./BookingTable";

const ManageBookings = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuthContext();

    const { data: reservations = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking-payments`)
            return res.data;
        }
    })
    
    return (
        <div className="mx-4 xl:mx-36 my-10 space-y-10">
            <Helmet>
                <title>MHS | Bookings</title>
            </Helmet>
            <div>
                <SectionTitle
                    heading={'At a Glance!'}
                    subHeading={'MANAGE ALL BOOKINGS'}
                ></SectionTitle>
            </div>
            <div className="bg-[#fff] p-3 md:p-12 space-y-5">
                <div className="font-cinzel font-bold">
                    <h3 className="text-lg lg:text-3xl">Total Bookings: {reservations.length}</h3>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="text-xs bg-[#D1A054] text-white">
                                <tr className="">
                                    <th className="w-2"> </th>
                                    <th>USER EMAIL</th>
                                    <th>PHONE NUMBER</th>
                                    <th>BOOKING DATE</th>
                                    <th>BOOKING TIME</th>
                                    <th>ACTIVITY</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reservations.map((reservation, index) => <BookingTable
                                        key={reservation._id}
                                        reservation={reservation}
                                        index={index + 1}
                                    ></BookingTable>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBookings;