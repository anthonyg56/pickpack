import React from 'react'
import { Link } from 'react-router-dom';
import { MyProfile, ViewTimeLine, CreatePost, SubmitNewPick } from './DashboardComponents'

const QuickLinks =  
        <div className="Quick-Links">
            <Link to="" ></Link><MyProfile />
            <Link to="" ><ViewTimeLine /></Link>
            <Link to="" ><CreatePost /></Link>
            <Link to="" ><SubmitNewPick /></Link>
        </div>

export default QuickLinks;