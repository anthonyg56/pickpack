import React from 'react';
import { connect } from 'react-redux';
import { changeSubNav, changeTitle } from "../../Redux/Actions/Actions";
import { Notifications, PickList, QuickGraph, QuickLinks } from './DashboardComponents'

const mapDispatchToProps = dispatch => {
    return {
        changeSubNav: subNav => dispatch(changeSubNav(subNav)),
        changeTitle: title => dispatch(changeTitle(title))
    };
}

class Dashboard extends React.Component {
    componentWillMount = () => {
        this.props.changeTitle("My Dashboard");
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