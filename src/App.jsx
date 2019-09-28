import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './Components/Private-Routes/PrivateRoutes';
import Landing from './Components/Landing/Landing';
import Content from './Components/Content';
import { Auth } from './Components/Auth/Auth';

class App extends React.Component {
  LandingPage = props => <Landing {...props} />

  Content = props => <Content {...props} />

  Auth = props => <Auth {...props} />

  render(){
    return(
      <div className="App">
        <Route exact path="/" render={props => this.LandingPage(props)} />
        <Route path="/auth/:id" render={props => this.Auth(props)} />
        <PrivateRoute path='/dashboard' Component={props => this.Content(props)} />
      </div>
    );
  }
}

export default App;
