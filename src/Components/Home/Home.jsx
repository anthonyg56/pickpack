import React from 'react';
import { connect } from 'react-redux';
import { changeSubNav, changeTitle } from "../../Redux/Actions/Actions";
import { Introduction, SubNav } from './HomeData';

const mapDispatchToProps = dispatch => {
    return {
        changeSubNav: subNav => dispatch(changeSubNav(subNav)),
        changeTitle: title => dispatch(changeTitle(title))
    };
}

class Home extends React.Component {
    componentWillMount = () => {
        this.props.changeSubNav(<SubNav />);
        this.props.changeTitle("Home");
    }

    render(){
        return(
            <div className="Home">
                <Introduction />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Home);