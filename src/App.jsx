import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './Components/Private-Routes/PrivateRoutes'
import Landing from './Components/Landing/Landing'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'

const App = () => 
    <div className="App">
      <Route exact path="/" component={props => <Landing {...props} />} />
      <Route exact path="/login" component={props => <Login {...props} />} />
      <Route exact path="/register/:id" component={props => <Register {...props} />}/>
      <PrivateRoute path='/:id' />
    </div>
      
    

export default App