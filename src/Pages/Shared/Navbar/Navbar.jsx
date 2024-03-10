import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    const navOptions = <>
        <li>
            <NavLink className={'mr-2 font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink className={'mr-2 font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/contact-us'}>Contact Us</NavLink>
        </li>
        <li>
            <NavLink className={'mr-2 font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/dashboard'}>Dashboard</NavLink>
        </li>
        <li>
            <NavLink className={'mr-2 font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/menu'}>Our Menu</NavLink>
        </li>
        <li>
            <NavLink className={'mr-2 font-bold px-3 py-1 rounded hover:bg-black hover:bg-opacity-50 active:bg-black active:scale-95'} to={'/shop/salad'}>Our Shop</NavLink>
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
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;