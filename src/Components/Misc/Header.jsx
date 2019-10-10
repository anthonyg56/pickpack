import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => ({
      base: state.base
})

const Header = props => 
    <div className="Header">
        <div className="Title">
            <h2>{props.base.title}</h2>
        </div>
        <div className="Sub-Nav">
            {props.base.subNav}
        </div>
    </div>

export default connect(mapStateToProps)(Header)