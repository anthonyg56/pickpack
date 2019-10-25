import React from "react"
import useAuth from '../../Hooks/useAuth'
import { Route, Redirect } from "react-router-dom"
import Content from '../Content'
import useProfile from "../../Hooks/useProfile"
import ProfileApi from "../../Api/ProfileApi"

const PrivateRoute = ({ ...rest }) => {
  const [{auth}] = useAuth()
  return <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? 
        <Content {...props} />
       : 
        <Redirect to="/login" />
    }
  />
  }
export default PrivateRoute;