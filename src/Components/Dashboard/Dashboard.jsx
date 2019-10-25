import React from 'react';
import { Notifications, PickList, QuickGraph, QuickLinks } from './DashboardComponents'

const Dashboard = () => {
    return(
        <div className="Dashboard">
            <div className="Dashboard-Left">
                <div className="Dashboard-Left-Top">
                    <PickList />
                    <QuickLinks />
                </div>
                <div className="Dashboard-Left-Bottom">
                    <QuickGraph />
                </div>
            </div>
            <div className="Dashboard-Right">
                <Notifications />
            </div>
        </div>
    )
}

export default Dashboard