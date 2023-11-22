import React from "react";
import { useMediaQuery } from "react-responsive";
import DashboardDesktop from "./DashboardDesktop";
import DashboardMobile from "./DashboardMobile";

const Dashboard = () => {
    
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div>
            {isDesktop? ( <DashboardDesktop />) : ( <DashboardMobile />) }
        </div>
    )
}

export default Dashboard;