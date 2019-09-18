import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
      SubNav: state.SubNav
    }
}

const Header = ({ SubNav }) => 
    <div className="Header">
        <div className="Search-Bar">
            <input />
        </div>
        <div className="Sub-Nav">
            {SubNav}
        </div>
        <div className="Icon">
        
        </div>
    </div>

export default connect(mapStateToProps)(Header)