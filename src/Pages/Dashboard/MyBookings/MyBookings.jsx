import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useBookings from "../../../Hooks/useBookings";
import BookingsTable from "./BookingsTable";
import { Link } from "react-router-dom";


const MyBookings = () => {
    const [bookings, refetch] = useBookings();
    const totalPrice = bookings.reduce((total, booking) => total + booking.price, 0)
    return (
        <div className="mx-4 xl:mx-36 my-10 space-y-10">
            <Helmet>
                <title>MHS | My Bookings</title>
            </Helmet>
            <div>
                <SectionTitle
                    heading={'Excellent Ambience'}
                    subHeading={'MY BOOKINGS'}
                ></SectionTitle>
            </div>
            <div className="bg-[#fff] p-3 md:p-12 space-y-10">
                <div className="font-cinzel flex justify-between items-center font-bold">
                    <h3 className="text-lg lg:text-3xl">Total Bookings: {bookings.length}</h3>
                    <h3 className="text-lg lg:text-3xl">Total Price: ${totalPrice.toFixed(2)}</h3>
                    {
                        bookings.length ?
                            <Link to={'/dashboard/payment/bookings-pay'}><button className="btn btn-sm bg-[#D1A054] text-white">Pay</button></Link>
                            :
                            <button disabled className="btn btn-sm bg-[#D1A054]  text-white">Pay</button>
                    }
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="text-xs bg-[#D1A054] text-white">
                                <tr className="">
                                    <th className="w-2"> </th>
                                    <th>Guest Number</th>
                                    <th>Date and Time</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map((item, index) => <BookingsTable 
                                        key={item._id}
                                        index={index + 1}
                                        item={item}
                                        refetch={refetch}
                                        ></BookingsTable>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;