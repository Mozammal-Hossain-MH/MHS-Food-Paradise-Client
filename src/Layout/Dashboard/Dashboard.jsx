import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import { useState } from "react";
import './Dashboard.css';
import { Toaster } from "react-hot-toast";


const Dashboard = () => {
    const [sidebar, setSidebar] = useState(true);

    return (
        <div className="relative flex justify-end ">
            <div className={`bg-[#D1A054] w-[200px] z-50 fixed left-0 h-screen font-cinzel py-12 ${!sidebar && '-translate-x-full'} transition`}>
                <DashboardSidebar
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                ></DashboardSidebar>
            </div>
            <div className={`w-full h-screen bg-[#F6F6F6] overflow-x-auto ${sidebar && 'width'} body-trans`}>
                <Outlet></Outlet>
            </div>
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

export default Dashboard;