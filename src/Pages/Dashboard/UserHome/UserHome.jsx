import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../Hooks/useAuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaMoneyCheckAlt, FaRocket, FaTruck } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { IoMdPricetags } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import pfp from '../../../assets/others/profile.png';
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const UserHome = () => {
    const { user, loading } = useAuthContext();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data: userStats = {} } = useQuery({
        queryKey: ['single-user-data', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/single-user-data?email=${user.email}`)
            return res.data[0];
        }
    })
    const moneyUsed = userStats?.wastedMoney;
    const avgItemPrice = userStats?.wastedMoney / userStats?.totalItem;

    const { data: review = {} } = useQuery({
        queryKey: ['reviews', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews/${user.email}`)
            return res.data[0]
        }
    })
    console.log(review);

    return (
        <div className="m-4 sm:m-12">
            <div >
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
            <div className="grid md:grid-cols-2">
                <div className="flex justify-center items-center bg-[#FFEDD5] py-10">
                    <div className="space-y-5 text-center">
                        <div className="flex justify-center">
                            <img className={`ml-3 w-20 h-20 p-0 rounded-full`} src={user?.photoURL ? user.photoURL : pfp} />
                        </div>
                        <h3 className="text-4xl font-cinzel">{user?.displayName}</h3>
                    </div>
                </div>
                <div className="bg-[#FEF9C3] font-cinzel space-y-6 py-10 px-2 sm:px-10">
                    <h1 className="text-4xl text-green-600 font-bold text-center">Your Activities</h1>
                    <p className="font-bold text-xl">Review for this site:</p>
                    <div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review?.rating}
                            readOnly
                        />
                    </div>
                    <p className="text-[#928484]">{review?.details}</p>
                    <Link to={'/dashboard/add-review'}>
                        <button className="btn w-[180px] mt-5 bg-gradientButton text-white">Change Review <FaRocket /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserHome;