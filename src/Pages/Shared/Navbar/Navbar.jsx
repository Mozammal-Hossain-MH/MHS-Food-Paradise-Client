import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import pfp from '../../../assets/others/profile.png';
import { IoMdCart } from "react-icons/io";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";



const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Choosing logout will logged you out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "You have successfully logged out",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })

            }
        });


    }

    const navOptions = <>
        <li>
            <NavLink className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/contact-us'}>Contact Us</NavLink>
        </li>
        {
            user && isAdmin &&
            <li>
                <NavLink className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/dashboard/admin-home'}>Dashboard</NavLink>
            </li>
        }
        {
            user && isAdmin ||
            <li>
                <NavLink className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/dashboard/user-home'}>Dashboard</NavLink>
            </li>
        }
        <li>
            <NavLink className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/menu'}>Our Menu</NavLink>
        </li>
        <li>
            <NavLink className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/shop/salad'}>Our Shop</NavLink>
        </li>
        <li>
            <NavLink className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95 relative'} to={'/dashboard/cart'}>
                <IoMdCart className="w-9 h-9 " /> <span className="bg-red-600 text-[8px] px-2 rounded-full absolute bottom-0 right-0">{cart.length}</span>
            </NavLink>
        </li>
        {
            user ? <li>
                <button onClick={handleLogout} className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'}>Logout</button>
            </li>
                : <>
                    <li>
                        <NavLink className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/login'}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink className={'font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/sign-up'}>Sign up</NavLink>
                    </li>
                </>
        }
        <li className="flex">
            <img className={`ml-3 w-7 h-7 p-0 rounded-full`} src={user?.photoURL ? user.photoURL : pfp} />
        </li>
        <li>
            <p>{user?.displayName}</p>
        </li>
    </>


    return (
        <div className="navbar bg-black text-white fixed z-10 bg-opacity-30 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu bg-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-opacity-50 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-extrabold">MHS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;