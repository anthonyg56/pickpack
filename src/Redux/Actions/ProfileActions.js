import Constants from '../Constants/Constants'
import {setCurrentUser} from './AuthActions'
import axios from 'axios'

const createProfile = (profileData, history) => dispatch => {
    axios
    .post('/api/profile/new', profileData)
    .then(res => {
        console.log(res)
        let resetUser = null
        dispatch(setCurrentUser(resetUser))
        resetUser = {}
        dispatch(setCurrentUser(resetUser))
        history.push('/login')
    })
    .catch(err => 
        dispatch({
            type: Constants.get.errors,
            payload: err.response.data
        })
    )
}

const readProfile = (profile, token) => dispatch => {
    axios
    .get('/api/profile/' + profile, { headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }})
    .then(res => {
        console.log(res.data)
        dispatch(setProfile(res.data))
    })
    .catch(err =>
        dispatch({
          type: Constants.get.errors,
          payload: err
        })
    )
}

const setProfile = profile => {
    return {
        type: Constants.create.profile,
        payload: profile
    }
}

export {
    createProfile,
    readProfile,
    setProfile
}