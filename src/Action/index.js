import {LOAD_RANDOM_USERS_SUCCESS,
        LOAD_RANDOM_USERS_ERROR,
        AVERAGE_USERS_AGE,
        MINIMUM_USERS_AGE,
        MAXIMUM_USERS_AGE,
        NORTHERN_MOST_LOCATION,
        SOUTHERN_MOST_LOCATION,
        LOAD_RANDOM_USERS_WAITING
      } from '../Type';
import axios from 'axios';
const URL='https://randomuser.me/api/?results=5000';

export const loadRandomUsers = ()=>{
  return (dispatch)=>{
  let type = LOAD_RANDOM_USERS_SUCCESS;
  dispatch({type: LOAD_RANDOM_USERS_WAITING});
  axios.get(URL).then(response=>{
        dispatch({type, payload: response.data.results});
      }).catch(error => {
      type = LOAD_RANDOM_USERS_ERROR;
      dispatch({type, payload: []})
    });

  }
}

export const averageUsersAge = ()=>{
  return (dispatch)=>{
    dispatch({type: AVERAGE_USERS_AGE});
  }
}

export const minimumUsersAge = ()=>{
  return (dispatch)=>{
  dispatch({type: MINIMUM_USERS_AGE});
  }
}

export const maximumUsersAge = ()=>{
  return (dispatch)=>{
  dispatch({type: MAXIMUM_USERS_AGE});
  }
}

export const northernMostPerson = ()=>{
  return (dispatch)=>{
    dispatch({type: NORTHERN_MOST_LOCATION});
  }
}

export const southernMostPerson = () => {
  return (dispatch)=>{
    dispatch({type: SOUTHERN_MOST_LOCATION});
  }
}
