import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../Hooks/useAuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PaymentTable from "./PaymentTable";


const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuthContext();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    
   
    const keys = [...Array(payments.length).keys()].reverse();
    let reversedArray = []
    for(const num of keys){
        const reversed = payments[num];
        reversedArray.push(reversed);
    }

    
    return (
        <div className="mx-4 xl:mx-36 my-10 space-y-10">
            <Helmet>
                <title>MHS | Payment history</title>
            </Helmet>
            <div>
                <SectionTitle
                    heading={'At a Glance!'}
                    subHeading={'PAYMENT HISTORY'}
                ></SectionTitle>
            </div>
            <div className="bg-[#fff] p-3 md:p-12 space-y-5">
                <div className="font-cinzel font-bold">
                    <h3 className="text-lg lg:text-3xl">Total Payments: {payments?.length}</h3>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="text-xs bg-[#D1A054] text-white">
                                <tr>
                                    <th>Transaction Id</th>
                                    <th>Category</th>
                                    <th>Total Price</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reversedArray.map((payment) => <PaymentTable 
                                    key={payment._id}
                                    payment={payment}
                                    ></PaymentTable>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;