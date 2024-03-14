import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import { useState } from "react";
import './Dashboard.css';


const Dashboard = () => {
    const [sidebar, setSidebar] = useState(true);

    return (
        <div className="relative flex justify-end">
            <div className={`bg-[#D1A054] w-[200px] fixed left-0 h-screen font-cinzel py-12 ${!sidebar && '-translate-x-full'} transition`}>
                <DashboardSidebar
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                ></DashboardSidebar>
            </div>
            <div className={`w-full bg-[#F6F6F6] overflow-x-auto ${sidebar && 'width'} body-trans`}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;