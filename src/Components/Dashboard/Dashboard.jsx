import React from 'react';
import { connect } from 'react-redux';
import { changeSubNav, changeTitle } from "../../Redux/Actions/Actions";

const mapDispatchToProps = dispatch => {
    return {
        changeSubNav: subNav => dispatch(changeSubNav(subNav)),
        changeTitle: title => dispatch(changeTitle(title))
    };
}

class Dashboard extends React.Component {
    componentWillMount = () => {
        this.props.changeSubNav(<SubNav />);
        this.props.changeTitle("My Dashboard");
    }

    render(){
        return(
            <div className="Dashboard">
                
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);