import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../Hooks/useAuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaMoneyCheckAlt, FaTruck } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { IoMdPricetags } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
    const {user, loading} = useAuthContext();
    const axiosSecure = useAxiosSecure();

    const {data: userStats = {}} = useQuery({
        queryKey: ['single-user-data', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/single-user-data?email=${user.email}`)
            return res.data[0];
        }
    })
    
    const moneyUsed = userStats?.wastedMoney;
    const avgItemPrice = userStats?.wastedMoney / userStats?.totalItem;

    return (
        <div className="m-12">
            <Helmet>
                <title>MHS | Users Home</title>
            </Helmet>
            <h2 className="text-3xl font-cinzel font-semibold">Hi, Welcome {user?.displayName ? user?.displayName : 'Back'}!</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6 text-white">
                <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <FaMoneyCheckAlt className="w-10 h-10 mr-3" />
                    <div>
                        <p className="text-4xl font-extrabold">${moneyUsed?.toFixed(2)}</p>
                        <p className="text-2xl">Total Wasted</p>
                    </div>
                </div>
                <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <FaTruck className="w-10 h-10 mr-3" />
                    <div>
                        <p className="text-4xl font-extrabold">{userStats.totalOrder}</p>
                        <p className="text-2xl">Orders</p>
                    </div>
                </div>
                <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <CiShop className="w-10 h-10 mr-3" />
                    <div>
                        <p className="text-4xl font-extrabold">{userStats.totalItem}</p>
                        <p className="text-2xl">Items</p>
                    </div>
                </div>
                <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <IoMdPricetags className="w-10 h-10 mr-3" />
                    <div>
                        <p className="text-4xl font-extrabold">${avgItemPrice?.toFixed(2)}</p>
                        <p className="text-2xl">Avg Price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;