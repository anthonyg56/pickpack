import React from 'react';
import { connect } from 'react-redux';
import { updateSubNav, updateTitle } from "../../Redux/Actions/Actions";
import { Notifications, PickList, QuickGraph, QuickLinks } from './DashboardComponents'

const mapDispatchToProps = dispatch => {
    return {
        updateSubNav: subNav => dispatch(updateSubNav(subNav)),
        updateTitle: title => dispatch(updateTitle(title))
    };
}

class Dashboard extends React.Component {
    componentWillMount = () => {
        this.props.updateTitle("My Dashboard");
    }

    render(){
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
        );
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);