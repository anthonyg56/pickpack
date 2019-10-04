import React from 'react'
import { ConnectedNewPost, ConnectedListByUser } from './CommunityData'

class Community extends React.Component {

    render(){
        return(
            <div>
                Hello World
                <ConnectedListByUser />
            </div>
        );
    }
}

export default Community;