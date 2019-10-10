import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './Components/Private-Routes/PrivateRoutes';
import Landing from './Components/Landing/Landing';
import Content from './Components/Content';
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'


class App extends React.Component {
  LandingPage = props => <Landing {...props} />

  Content = props => <Content {...props} />

  render(){
    return(
      <div className="App">
        <Route exact path="/" render={props => this.LandingPage(props)} />
        <Route exact path="/login" component={props => <Login {...props} />} />
        <Route exact path="/register/:id" component={props => <Register {...props} />}/>
        <PrivateRoute path='/:id' Component={props => this.Content(props)} />
      </div>
    );
  }
}

export default App;
