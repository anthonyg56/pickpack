import React from 'react';
import { connect } from 'react-redux';
import { updateSubNav, updateTitle } from "../../Redux/Actions/BaseActions";
import {readProfile} from '../../Redux/Actions/ProfileActions';
import { Notifications, PickList, QuickGraph, QuickLinks } from './DashboardComponents'

const mapDispatchToProps = dispatch => {
    return {
        updateSubNav: subNav => dispatch(updateSubNav(subNav)),
        updateTitle: title => dispatch(updateTitle(title)),
        readProfile: (profile, token) => dispatch(readProfile(profile, token))
    };
}

const mapStateToProps = state => ({
    auth: state.auth
})

class Dashboard extends React.Component {
    componentWillMount = () => {
        const jwt = this.props.auth
        console.log(jwt)
        this.props.updateTitle("My Dashboard");
        this.props.readProfile(jwt.user._id, jwt.token)
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);