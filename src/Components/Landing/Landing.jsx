import React from 'react';
import { Arrows, LandingNav, LoginRegisterLink, Sections, IndexIndicator, SocialMedia, IndexNumber} from './LandingData';

class Landing extends React.Component {
    changeIndex = newIndex => {
        this.setState({
            Index: newIndex 
        })
    }

    state = {
        Index: 0
    }
    render(){
        const {Index} = this.state;
        return(
            <div className="Landing" style={{backgroundImage: "url(" + Sections[Index].Pic + ")"}}>
                <div className="Overlay">
                    <div className="Header">
                        <LoginRegisterLink />
                        <LandingNav Index={Index} Welcome={() => this.changeIndex(0)} About={() => this.changeIndex(1)} Features={() => this.changeIndex(2)} Design={() => this.changeIndex(3)} Join={() => this.changeIndex(4)} />
                    </div>
                    <div className="Body">
                        {Sections[Index].Component}
                    </div>
                    <div className="Footer">
                        <IndexNumber Index={Index} />
                        <SocialMedia />
                        <IndexIndicator Index={Index} Welcome={() => this.changeIndex(0)} About={() => this.changeIndex(1)} Features={() => this.changeIndex(2)} Design={() => this.changeIndex(3)} Join={() => this.changeIndex(4)}/>
                        <Arrows Index={Index} Back={() => this.changeIndex(Index - 1)} Next={() => this.changeIndex(Index + 1)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;