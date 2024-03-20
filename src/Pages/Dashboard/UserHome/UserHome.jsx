import useAuthContext from "../../../Hooks/useAuthContext";


const UserHome = () => {

    const {user} = useAuthContext();

    return (
        <div className="m-12">
            <h2 className="text-3xl font-cinzel font-semibold">Hi, Welcome {user?.displayName ? user?.displayName : 'Back'}!</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6 text-white">
                <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    {/* <FaMoneyCheckAlt className="w-10 h-10 mr-3" /> */}
                    <div>
                        <p className="text-4xl font-extrabold">1000</p>
                        <p className="text-2xl">Revenue</p>
                    </div>
                </div>
                <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    {/* <FaUsers className="w-10 h-10 mr-3" /> */}
                    <div>
                        <p className="text-4xl font-extrabold">1500</p>
                        <p className="text-2xl">Customers</p>
                    </div>
                </div>
                <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    {/* <SiCodechef className="w-10 h-10 mr-3" /> */}
                    <div>
                        <p className="text-4xl font-extrabold">103</p>
                        <p className="text-2xl">Products</p>
                    </div>
                </div>
                <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    {/* <FaTruck className="w-10 h-10 mr-3" /> */}
                    <div>
                        <p className="text-4xl font-extrabold">500</p>
                        <p className="text-2xl">Orders</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;