import { FaHome, FaBook, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { FcBusinessContact } from "react-icons/fc";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import useAdmin from "../../Hooks/useAdmin";
import UsersRouteSidebar from "../UsersRouteSidebar/UsersRouteSidebar";

const DashboardSidebar = ({ sidebar, setSidebar }) => {
    // TODO: verify admin or not from database
    const [isAdmin] = useAdmin();

    return (
        <div className="relative">
            <div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold leading-3">MHS</h1>
                    <p className="text-xl font-bold uppercase">restaurants</p>
                </div>
                <ul className={`${isAdmin ? 'mt-2' : 'mt-16'} space-y-2 menu`}>
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/admin-home'}>
                                    <FaHome className="mr-2"></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/add-items'}>
                                    <ImSpoonKnife className="mr-2" />
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/manage-items'}>
                                    <TfiMenuAlt className="mr-2" />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/manage-bookings'}>
                                    <FaBook className="mr-2"></FaBook>
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/users'}>
                                    <FaUsers className="mr-2"></FaUsers>
                                    All Users
                                </NavLink>
                            </li>

                        </> :
                            <UsersRouteSidebar></UsersRouteSidebar>
                    }
                </ul>
                {/* universal */}
                <div className={`border-b-2 mx-2 ${isAdmin ? 'my-2' : 'my-6'}`}></div>
                <ul className="space-y-2 menu">
                    <li>
                        <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/'}>
                            <FaHome className="mr-2"></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/menu'}>
                            <IoMenu className="mr-2" />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/shop/salad'}>
                            <CiShop className="mr-2" />
                            shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/contact-us'}>
                            <FcBusinessContact className="mr-2" />
                            contact us
                        </NavLink>
                    </li>
                </ul>
                {
                    isAdmin &&
                    <>
                        <div className={`border-b-2 m-2`}></div>
                        <ul className="space-y-2 menu">
                            <UsersRouteSidebar></UsersRouteSidebar>
                        </ul>
                    </>
                }
            </div>
            <div onClick={() => setSidebar(!sidebar)} className="absolute top-1/2 -right-[30px] bg-[#D1A054] py-6 rounded-r-full hover:bg-[#c19b61] hover:scale-90 transition ease-in-out delay-150">
                {
                    sidebar ? <RiMenuFoldLine className="w-8 h-12" /> : <RiMenuUnfoldLine className="w-8 h-12" />
                }
            </div>
        </div>
    );
};

export default DashboardSidebar;