import { FaAddressBook, FaCartArrowDown, FaHome } from "react-icons/fa";
import { MdPayments, MdRateReview } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const UsersRouteSidebar = () => {
    const [cart] = useCart();
    return (
        <>
            <li>
                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/user-home'}>
                    <FaHome className="mr-2"></FaHome>
                    User Home
                </NavLink>
            </li>
            <li>
                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/reservation'}>
                    <SlCalender className="mr-2"></SlCalender>
                    Reservation
                </NavLink>
            </li>
            <li>
                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/payment-history'}>
                    <MdPayments className="mr-2" />
                    payment history
                </NavLink>
            </li>
            <li>
                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/cart'}>
                    <FaCartArrowDown className="mr-2"></FaCartArrowDown>
                    My cart ({cart.length})
                </NavLink>
            </li>
            <li>
                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/add-review'}>
                    <MdRateReview className="mr-2" />
                    add review
                </NavLink>
            </li>
            <li>
                <NavLink className={'flex items-center uppercase px-2 py-1 rounded hover:bg-[#c19b61] hover:text-white transition duration-500 active:scale-90'} to={'/dashboard/my-booking'}>
                    <FaAddressBook className="mr-2"></FaAddressBook>
                    my booking
                </NavLink>
            </li>
        </>
    );
};

export default UsersRouteSidebar;