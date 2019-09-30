import React from 'react';

const NotificationBar = props => {

    return (
        <div className="Notification-Bar">
        
        </div>
    )
}

const NotificationItem = props => {

    return (
        <div className="Notification-Item">
            <div className="Title">
                <h4>{props.titles}</h4>
            </div>
            <div className="Notification">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

const ListOfPicks = () => {

    return (
        <div className="List-Of-Picks">
        
        </div>
    )
}

const PickItem = () => {

    return (
        <div className="Pick-Item">
        
        </div>
    )
}

const QuickGraph = () => {

    return (
        <div className="Quick-Graph">
        
        </div>
    )
}

const MyProfile = () => {

    return (
        <div className="My-Profile">
        
        </div>
    )
}

const MyStats = () => {

    return (
        <div className="My-Stats">
        
        </div>
    )
}

const CreatePost = () => {

    return (
        <div className="Create-Post">
        
        </div>
    )
}

const SubmitNewPick = () => {

    return (
        <div className="Submit-New-Pick">
        
        </div>
    )
}


export default { NotificationBar, NotificationItem, ListOfPicks, PickItem, QuickGraph, MyProfile, MyStats, CreatePost, SubmitNewPick };