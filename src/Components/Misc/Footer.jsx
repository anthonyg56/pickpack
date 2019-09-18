import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
      Name: state.Name
    }
}

const Footer = ({ Name }) => 
    <div className="Footer">
        <div className="Social-Media">
        
        </div>
        <div className="Resources">
        
        </div>
        <div className="Title">
            <h4>{Name}</h4>
        </div>
    </div>

export default connect(mapStateToProps)(Footer)