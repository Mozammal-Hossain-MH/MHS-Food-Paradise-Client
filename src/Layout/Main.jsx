import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';

const Main = () => {
    // const location = useLocation();
    // const noNav = location.pathname.includes('login');
    return (
        <div>
            {<Navbar></Navbar>}
            <Outlet></Outlet>
            <Toaster toastOptions={{
                error: {
                    style: {
                        background: 'transparent',
                        color: 'red',
                        marginTop: '50px',
                        fontWeight: 700
                    },
                }
            }} />
        </div>
    );
};

export default Main;